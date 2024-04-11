# External Dependencies
from fastapi import FastAPI, HTTPException, Path, Query, Body
from fastapi.middleware.cors import CORSMiddleware

# Inner dependencies
from endpoints.apps import router as endpoints_apps
from utils.load_moduls import load_src

app = FastAPI()

# Import endpoints
app.include_router(endpoints_apps, prefix="/apps", tags=["apps"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Welcome to RecFlows API"
    }

@app.get("/fake")
def fake():
    from recflows.resources.app import BaseApp
    return BaseApp("id-1", "name-1", "description-1").get_conexion_url()


load_src()
