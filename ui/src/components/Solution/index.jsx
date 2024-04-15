import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { BASE_URL, fetchData } from '../../utils'
import { TutorialsList } from '../../components/Tutorials'


const Solution = ({ id, module }) => {
  const [ toggle, setToggle ] = useState(false);

  const handleClick = () => {
    setToggle(!toggle)
  }

  return <Wrapper expanded={toggle}>
    <div className="solution-container">
      <div className="details">
        <div className="name">{id}</div>
        <div className="module">{module}</div>
      </div>
      <img
        src={`assets/${toggle ? "up": "down"}.svg`}
        alt="Collapse Tutorials"
        className="icon-collapse-tutorials"
        onClick={handleClick}
      />
    </div>
    <div className="tutorials">
      <TutorialsList endpoint={`/solutions/${id}`}/>
    </div>
  </Wrapper>
}

export { Solution }
