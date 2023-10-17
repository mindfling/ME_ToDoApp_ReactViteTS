import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ExampleModal() {
  // const [show, setShow] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log('it hides');
  }
  // const handleShow = () => setShow(true);

  const submitHandle = () => {
    alert('submit');
    handleClose();
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Button variant='warning' className='mx-2' onClick={handleShow}>
        Another launch modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={submitHandle}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ExampleModal input Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
              <Form.Label>ExampleModal input text</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" type='reset'>
            Reset
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={submitHandle}>
            Save Changes
          </Button>
          <CloseButton></CloseButton>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default ExampleModal;
