import React from "react";
import { useParams } from "react-router-dom";


const Audit = () => {
  const { id } = useParams();
  return <>Audit {id}</>
}

export { Audit }
