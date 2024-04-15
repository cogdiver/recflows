import React, { useEffect } from "react";
import { Wrapper } from './styles';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BASE_URL, fetchData } from '../../utils'
import { Context } from '../../Context';


const DeleteModal = () => {
  const { showModal, handleCloseModal, dataModal } = Context()
  const { endpoint, id, message } = dataModal

  const handleDelete = () => {
    const url = `${BASE_URL}/${endpoint}/${id}`

    fetchData(
      url,
      { method: 'DELETE' },
      (error) => console.error(error),
      (json) => console.log("Resource was deleted.", json),
    )
    handleCloseModal()
  }
  useEffect(() => {
    console.log("showModal:", showModal)
  }, [showModal])

  return <Modal show={showModal} onHide={handleCloseModal}>
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
