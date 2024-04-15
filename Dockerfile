FROM python:3.11-alpine as base
# Set the working directory in the container
WORKDIR /opt/recflows
# Copy the dependencies file and install them
COPY requirements.txt .
RUN pip install -r requirements.txt
# Copy the rest of the application code to the container
COPY . .


FROM base as tester
# Install the test dependencies
RUN pip install -r test_requirements.txt
# Command to run the test and coverage report
CMD [ "pytest" ]


FROM base
# ENTRYPOINT [ "recflows" ]
# Command to run the application using uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
# pip install --upgrade setuptools wheel twine