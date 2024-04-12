# Python dependencies
from datetime import datetime

# External dependencies
from fastapi import APIRouter, HTTPException, Path, Body
from fastapi.exceptions import HTTPException

# Inner dependencies
from recflows.services.database import run_query, read_table, read_resource_by_id
from recflows.services.database import insert_resouce, update_resouce, delete_resouce_by_id
from recflows.vars import TABLE_APPS, TABLE_VARIABLES, TABLE_DATASETS, TABLE_MODELS, TABLE_RECOMMENDERS

# Create a router to group the endpoints
router = APIRouter()


@router.get("/")
def read_apps():
    return read_table(TABLE_APPS)


@router.post("/")
def create_app(
    app: dict = Body(
        ...,
        example={
            "id": f"id-{int(datetime.now().timestamp())}",
            "name": f"name-{int(datetime.now().timestamp())}",
            "description": f"desc-{int(datetime.now().timestamp())}",
        }
    )
):
    id = app.get("id")

    if not id:
        raise HTTPException(
            status_code=400,
            detail='the required field "id" was not provided.'
        )

    if read_resource_by_id(TABLE_APPS, id):
        raise HTTPException(
            status_code=428,
            detail=f'App "{id}" resource al ready exists.'
        )

    insert_resouce(TABLE_APPS, app)

    return app


@router.get("/{app_id}")
def read_app(app_id: str = Path(...)):
    resource = read_resource_by_id(TABLE_APPS, app_id)

    if not resource:
        raise HTTPException(
            status_code=404,
            detail=f"Resource '{app_id}' not found"
        )

    return resource[0]


@router.put("/{app_id}")
def update_app(
    app_id: str = Path(...),
    app: dict = Body(
        ...,
        example={
            "id": f"id-{int(datetime.now().timestamp())}",
            "name": f"name-{int(datetime.now().timestamp())}",
            "description": f"desc-{int(datetime.now().timestamp())}",
        }
    )
):
    resource = read_resource_by_id(TABLE_APPS, app_id)

    if not resource:
        raise HTTPException(
            status_code=404,
            detail=f"Resource '{app_id}' not found"
        )

    if app.get("id") and app["id"] != app_id:
        raise HTTPException(
            status_code=412,
            detail=f"Resource id '{app_id}' does not match with app id '{app['id']}'"
        )

    app["id"] = app_id
    update_resouce(TABLE_APPS, app)

    return app


@router.delete("/{app_id}")
def delete_app(app_id: str = Path(...)):
    resource = read_resource_by_id(TABLE_APPS, app_id)

    if not resource:
        raise HTTPException(
            status_code=404,
            detail=f"Resource '{app_id}' not found"
        )

    print(f"DELETE FROM {TABLE_APPS} WHERE id = '{app_id}'")
    delete_resouce_by_id(TABLE_APPS, app_id)

    return resource[0]


@router.get("/{app_id}/variables")
def read_apps_variables(app_id: str = Path(...)):
    query = f"""
    SELECT v.*
    FROM {TABLE_VARIABLES} v, {TABLE_APPS} a
    WHERE app_id = a.id
        AND a.id = '{app_id}'
    """
    return run_query(query)


@router.post("/{app_id}/variables")
def create_app_variable(
    app_id: str = Path(...),
    var: dict = Body(
        ...,
        example={
            "id": f"id-{int(datetime.now().timestamp())}",
            "key": "MY_SECRET",
            "value": "VALUE_FOR_MI_SECRET",
        }
    )
):
    id = var.get("id")

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

    var["app_id"] = app_id
    insert_resouce(TABLE_VARIABLES, var)

    return var


@router.get("/{app_id}/datasets")
def read_apps_datasets(app_id: str = Path(...)):
    query = f"""
    SELECT d.*
    FROM {TABLE_DATASETS} d, {TABLE_APPS} a
    WHERE app_id = a.id
        AND a.id = '{app_id}'
    """
    return run_query(query)


@router.post("/{app_id}/datasets")
def create_app_variable(
    app_id: str = Path(...),
    dataset: dict = Body(
        ...,
        example={
            "id": f"id-{int(datetime.now().timestamp())}",
            "name": "DATASET_NAME",
        }
    )
):
    id = dataset.get("id")

    if not id:
        raise HTTPException(
            status_code=400,
            detail='the required field "id" was not provided.'
        )

    if read_resource_by_id(TABLE_DATASETS, id):
        raise HTTPException(
            status_code=428,
            detail=f'Dataset "{id}" resource al ready exists.'
        )

    dataset["app_id"] = app_id

    if not insert_resouce(TABLE_DATASETS, dataset):
        raise HTTPException(
            status_code=406,
            detail=f'Invalid App "{app_id}" resource not exists.'
        )

    return dataset
