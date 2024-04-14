import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from './styles';
import { DeleteModal } from '../DeleteModal'
// import { Context } from '../../Context';


const AppDescription = ({ id, name, description }) => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const navigate = useNavigate();
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
      onClick={handleShowModal}
    />
    <DeleteModal
      id={id}
      endpoint="apps"
      message={`The resource App (${id}) will be deleted and all its related resources`}
      show={showModal}
      onHide={handleCloseModal}
    />
  </Wrapper>
}

export { AppDescription }
