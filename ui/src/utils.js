const BASE_URL = "http://localhost:8080"
const primary_services = [
  {url: "/audits", name: "Audits"},
  {url: "/tutorials", name: "Tutorials"},
  {url: "/variables", name: "Variables"},
  {url: "/channels", name: "Channels"},
]

const other_services = [
  {url: "/sources", name: "Sources"},
  {url: "/datasets", name: "Datasets"},
  {url: "/solutions", name: "Solutions"},
  {url: "/models", name: "Models"},
  {url: "/versions", name: "Versions"},
  {url: "/recommenders", name: "Recommenders"},
]

const fetchData = async (url, options, setError, callback) => {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log(json)
    // console.log(json[0])
    callback(json);

  } catch (error) {
    setError(error);
  }
};

export {
  BASE_URL,
  primary_services,
  other_services,
  fetchData
}
