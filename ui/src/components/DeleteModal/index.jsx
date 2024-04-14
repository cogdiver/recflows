import React from "react";
import { Wrapper } from './styles';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BASE_URL, fetchData } from '../../utils'


const DeleteModal = ({ show, onHide, endpoint, id, message }) => {
  const handleDelete = () => {
    const url = `${BASE_URL}/${endpoint}/${id}`

    fetchData(
      url,
      { method: 'DELETE' },
      (error) => console.error(error),
      (json) => console.log("Resource was deleted.", json),
    )
    onHide()
  }

  return <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Deleting...</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Wrapper>{message}</Wrapper>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </Modal.Footer>
  </Modal>
}

export { DeleteModal }
