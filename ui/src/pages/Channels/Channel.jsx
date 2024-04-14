import React from "react";
import { useParams } from "react-router-dom";


const Channel = () => {
  const { id } = useParams();
  return <>Channel {id}</>
}

export { Channel }
