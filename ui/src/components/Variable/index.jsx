import React, { useState } from "react";
import { Wrapper } from './styles'
import { useNavigate } from "react-router-dom";
import { Context } from '../../Context';



const VarDescription = ({ id, app_id, name, value }) => {
  const [ showValue, setShowVariable ] = useState(false);
  const { handleShowModal } = Context()
  const navigate = useNavigate();


  const handleDelete = () => {
    handleShowModal({
      id: id,
      endpoint: "variables",
      message: `The resource Variable (${id}) will be deleted`,
    })
  }
  const handleClick = () => {
    setShowVariable(!showValue)
  }
  const handleAppClick = () => {
    navigate(`/apps/${app_id}`);
  }

  return <Wrapper>
    <div
      className="column app_id"
      onClick={handleAppClick}
    >
      {app_id}
    </div>

    <div className="column name">{name}</div>

    <div className="details">
      <div className="column value">
        {showValue ? value : "**********"}
      </div>
      <img
        onClick={handleClick}
        src="assets/show.svg"
        alt="Show variable value"
        className="icon icon-show"
      />
      <img
        className="icon delete-button"
        src="assets/delete-button.svg"
        alt="Delete Variable"
        onClick={handleDelete}
      />
    </div>
  </Wrapper>
}

export { VarDescription }
