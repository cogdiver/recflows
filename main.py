# External Dependencies
from fastapi import FastAPI, HTTPException, Path, Query, Body
from fastapi.middleware.cors import CORSMiddleware

# Inner dependencies
from recflows.api.endpoints.apps import router as endpoints_apps
from recflows.api.endpoints.sources import router as endpoints_sources
from recflows.api.endpoints.datasets import router as endpoints_datasets
from recflows.api.endpoints.solutions import router as endpoints_solutions
from recflows.api.endpoints.models import router as endpoints_models
from recflows.api.endpoints.versions import router as endpoints_versions
from recflows.api.endpoints.recommenders import router as endpoints_recommenders
from recflows.api.endpoints.tutorials import router as endpoints_tutorials
from recflows.api.endpoints.audits import router as endpoints_audits
from recflows.api.endpoints.channels import router as endpoints_channels
from recflows.api.endpoints.variables import router as endpoints_variables
from recflows.utils.load_moduls import load_src

app = FastAPI()
#
# Import endpoints
app.include_router(endpoints_apps, prefix="/apps", tags=["apps"])
app.include_router(endpoints_sources, prefix="/sources", tags=["sources"])
app.include_router(endpoints_datasets, prefix="/datasets", tags=["datasets"])
app.include_router(endpoints_solutions, prefix="/solutions", tags=["solutions"])
app.include_router(endpoints_models, prefix="/models", tags=["models"])
app.include_router(endpoints_versions, prefix="/versions", tags=["versions"])
app.include_router(endpoints_recommenders, prefix="/recommenders", tags=["recommenders"])
app.include_router(endpoints_tutorials, prefix="/tutorials", tags=["tutorials"])
app.include_router(endpoints_audits, prefix="/audits", tags=["audits"])
app.include_router(endpoints_channels, prefix="/channels", tags=["channels"])
app.include_router(endpoints_variables, prefix="/variables", tags=["variables"])

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
    from recflows.resources.app import App
    return App("id-1", "name-1", "description-1").get_conexion_url()


load_src()
