import React from "react";
import { useParams } from "react-router-dom";


const App = () => {
  const { id } = useParams();
  return <>App {id}</>
}

export { App }
