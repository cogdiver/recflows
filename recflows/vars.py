import os

HOST = os.environ.get("DATABASE_HOST")
PORT = os.environ.get("DATABASE_PORT")
USER = os.environ.get("DATABASE_USER")
PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE = os.environ.get("DATABASE_DB")

TABLE_APPS = os.environ.get("TABLE_APPS", "apps")
TABLE_VARIABLES = os.environ.get("TABLE_VARIABLES", "variables")
TABLE_SOURCES = os.environ.get("TABLE_SOURCES", "sources")
TABLE_DATASETS = os.environ.get("TABLE_DATASETS", "datasets")
TABLE_SOLUTIONS = os.environ.get("TABLE_SOLUTIONS", "solutions")
TABLE_MODELS = os.environ.get("TABLE_MODELS", "models")
TABLE_VERSIONS = os.environ.get("TABLE_VERSIONS", "versions")
TABLE_RECOMMENDERS = os.environ.get("TABLE_RECOMMENDERS", "recommenders")
TABLE_TUTORIALS = os.environ.get("TABLE_TUTORIALS", "tutorials")
TABLE_AUDITS = os.environ.get("TABLE_AUDITS", "audits")
TABLE_CHANNELS = os.environ.get("TABLE_CHANNELS", "channels")