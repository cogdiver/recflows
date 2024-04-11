# Load variables
source .env


DeployPyPI() {
  pip install --user --upgrade setuptools wheel twine
  python setup.py sdist bdist_wheel
  python -m twine upload dist/* --verbose
  rm -r build/ dist/ recflows.egg-info/
}

DeployDocker() {
  docker build -t cogdiver/recflows:$RECFLOWS_VERSION .
  docker push cogdiver/recflows:$RECFLOWS_VERSION
}


if [[ $1 == "pypi" ]]; then
  DeployPyPI
elif [[ $1 == "docker" ]]; then
  DeployDocker
fi
