import React, { useEffect, useState } from "react"
import { WrapperDescription } from "./styles"
import { Context } from '../../Context'


const TutorialDescription = ({ id, solution_id, name, content, showSolution }) => {
  const global = solution_id ? "solution_scope" : "global"
  const { handleShowTutorial, handleShowModal } = Context()

  const handleDelete = () => {
    handleShowModal({
      id: id,
      endpoint: "tutorials",
      message: `The resource Tutorial (${id}) will be deleted`
    })
  }
  const handleClick = () => {
    handleShowTutorial({ name, content })
  }

  return <>
    <WrapperDescription>
      {showSolution ? <div
        className={`column solution_id ${global}`}
      >
        {solution_id || "global"}
      </div> : null}

      <div className="details">
        <div className="column name">{name}</div>

        <img
          src="assets/expand-start-tutorial.svg"
          alt={`Start tutorial: ${name}`}
          className="start-tutorial"
          onClick={handleClick}
        />

        <img
          src="assets/delete-button.svg"
          alt={`Delete Tutorial: ${name}`}
          className="start-tutorial"
          onClick={handleDelete}
        />
      </div>
    </WrapperDescription>
  </>
}

export { TutorialDescription }
