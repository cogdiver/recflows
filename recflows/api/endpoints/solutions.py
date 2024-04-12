# Python dependencies
from datetime import datetime

# External dependencies
from fastapi import APIRouter, HTTPException, Path, Body
from fastapi.exceptions import HTTPException

# Inner dependencies
from recflows.services.database import read_table, read_resource_by_id
from recflows.services.database import insert_resouce, update_resouce, delete_resouce_by_id
from recflows.vars import TABLE_SOLUTIONS

# Create a router to group the endpoints
router = APIRouter()


@router.get("/")
def read_solutions():
    return read_table(TABLE_SOLUTIONS)


@router.post("/")
def create_solution(
    solution: dict = Body(
        ...,
        example={
            "id": f"id-{int(datetime.now().timestamp())}"
        }
    )
):
    id = solution.get("id")

    if not id:
        raise HTTPException(
            status_code=400,
            detail='the required field "id" was not provided.'
        )

    if read_resource_by_id(TABLE_SOLUTIONS, id):
        raise HTTPException(
            status_code=428,
            detail=f'Solution "{id}" resource al ready exists.'
        )

    insert_resouce(TABLE_SOLUTIONS, solution)

    return solution


@router.get("/{solution_id}")
def read_solution(solution_id: str = Path(...)):
    resource = read_resource_by_id(TABLE_SOLUTIONS, solution_id)

    if not resource:
        raise HTTPException(
            status_code=404,
            detail=f"Resource '{solution_id}' not found"
        )

    return resource[0]


@router.put("/{solution_id}")
def update_solution(
    solution_id: str = Path(...),
    solution: dict = Body(
        ...,
        example={
            "id": f"id-{int(datetime.now().timestamp())}"
        }
    )
):
    resource = read_resource_by_id(TABLE_SOLUTIONS, solution_id)

    if not resource:
        raise HTTPException(
            status_code=404,
            detail=f"Resource '{solution_id}' not found"
        )

    if solution.get("id") and solution["id"] != solution_id:
        raise HTTPException(
            status_code=412,
            detail=f"Resource id '{solution_id}' does not match with solution id '{solution['id']}'"
        )

    solution["id"] = solution_id
    update_resouce(TABLE_SOLUTIONS, solution)

    return solution


@router.delete("/{solution_id}")
def delete_solution(solution_id: str = Path(...)):
    resource = read_resource_by_id(TABLE_SOLUTIONS, solution_id)

    if not resource:
        raise HTTPException(
            status_code=404,
            detail=f"Resource '{solution_id}' not found"
        )

    print(f"DELETE FROM {TABLE_SOLUTIONS} WHERE id = '{solution_id}'")
    delete_resouce_by_id(TABLE_SOLUTIONS, solution_id)

    return resource[0]
