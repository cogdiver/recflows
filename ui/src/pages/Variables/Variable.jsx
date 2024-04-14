import React from "react";
import { useParams } from "react-router-dom";


const Variable = () => {
  const { id } = useParams();
  return <>Variable {id}</>
}

export { Variable }
