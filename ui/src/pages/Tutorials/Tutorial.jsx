import React from "react";
import { useParams } from "react-router-dom";


const Tutorial = () => {
  const { id } = useParams();
  return <>Tutorial {id}</>
}

export { Tutorial }
