# Python dependencies
from datetime import datetime

# External dependencies
from fastapi import APIRouter, HTTPException, Path, Body
from fastapi.exceptions import HTTPException

# Inner dependencies
from recflows.services.database import read_table, read_resource_by_id
from recflows.services.database import insert_resouce, update_resouce, delete_resouce_by_id
from vars import TABLE_VARIABLES

# Create a router to group the endpoints
router = APIRouter()


@router.get("/")
def read_variables():
    return read_table(TABLE_VARIABLES)


@router.post("/")
def create_variable(
    variable: dict = Body(
        ...,
        examples={
            "id": f"id-{int(datetime.now().timestamp())}"
        }
    )
):
    id = variable.get("id")

    if not id:
        raise HTTPException(
            status_code=400,
            detail='the required field "id" was not provided.'
        )

    if read_resource_by_id(TABLE_VARIABLES, id):
        raise HTTPException(
            status_code=428,
            detail=f'Variable "{id}" resource al ready exists.'
        )

    insert_resouce(TABLE_VARIABLES, variable)

    return variable


@router.get("/{variable_id}")
def read_variable(variable_id: str = Path(...)):
    resource = read_resource_by_id(TABLE_VARIABLES, variable_id)

    if not resource:
        raise HTTPException(
            status_code=404,
            detail=f"Resource '{variable_id}' not found"
        )

    return resource[0]


@router.put("/{variable_id}")
def update_variable(
    variable_id: str = Path(...),
    variable: dict = Body(
        ...,
        examples={
            "id": f"id-{int(datetime.now().timestamp())}"
        }
    )
):
    resource = read_resource_by_id(TABLE_VARIABLES, variable_id)

    if not resource:
        raise HTTPException(
            status_code=404,
            detail=f"Resource '{variable_id}' not found"
        )

    if variable.get("id") and variable["id"] != variable_id:
        raise HTTPException(
            status_code=412,
            detail=f"Resource id '{variable_id}' does not match with variable id '{variable['id']}'"
        )

    variable["id"] = variable_id
    update_resouce(TABLE_VARIABLES, variable)

    return variable


@router.delete("/{variable_id}")
def delete_variable(variable_id: str = Path(...)):
    resource = read_resource_by_id(TABLE_VARIABLES, variable_id)

    if not resource:
        raise HTTPException(
            status_code=404,
            detail=f"Resource '{variable_id}' not found"
        )

    print(f"DELETE FROM {TABLE_VARIABLES} WHERE id = '{variable_id}'")
    delete_resouce_by_id(TABLE_VARIABLES, variable_id)

    return resource[0]
