import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from './styles';
import { Context } from '../../Context';


const AppDescription = ({ id, name, description }) => {
  const { handleShowModal } = Context()

  const navigate = useNavigate();
  const handleDelete = (e) => {
    handleShowModal({
      id: id,
      endpoint: "apps",
      message: `The resource App (${id}) will be deleted and all its related resources`
    })
  }
  const handleClick = (e) => {
    navigate(`/apps/${id}`);
  }

  return <Wrapper>
    <div className="app-details" onClick={handleClick}>
      <strong className="app-name">{name}</strong>
      <p className="app-description">{description}</p>
    </div>

    <img
      className="delete-button"
      src="assets/delete-button.svg"
      alt="Delete Application"
      onClick={handleDelete}
    />
  </Wrapper>
}

export { AppDescription }
