import React, { useState } from "react";
import { Wrapper } from './styles'
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "../DeleteModal";


const VarDescription = ({ id, app_id, name, value }) => {
  const [ showValue, setShowVariable ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);
  const navigate = useNavigate();
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);


  const handleClick = () => {
    setShowVariable(!showValue)
  }
  const handleAppClick = () => {
    navigate(`/apps/${id}`);
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
        onClick={handleShowModal}
      />
    </div>
    <DeleteModal
      id={id}
      endpoint="variables"
      message={`The resource Variable (${id}) will be deleted`}
      show={showModal}
      onHide={handleCloseModal}
    />
  </Wrapper>
}

export { VarDescription }
