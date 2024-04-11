FROM python:3.11-alpine
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install --upgrade setuptools wheel twine
COPY recflows/ ./recflows/
