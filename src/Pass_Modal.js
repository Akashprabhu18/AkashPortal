import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Pass_Modal({ show, setShow }) {
  // Instead of managing its own show state, it now uses the show prop passed from the parent component

  const handleClose = () => setShow(false); // Call the setShow function provided by props to hide the modal

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Password Changed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, your password is changed!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Pass_Modal;
