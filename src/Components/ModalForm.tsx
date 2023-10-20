import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


interface ModalProps {
  isVisible: boolean;  
}

export function ModalForm( {isVisible}: ModalProps ) {
  const [show, setShow] = useState(isVisible);
  const [userName, setUserName] = useState('');

  // закрыть
  const handleClose = () => {
    setShow(false);
    console.log('it close');
  }
  
  // открыть
  const handleShow = () => {
    setShow(true);
    console.log('it open');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();    
    console.log('userName: ', userName);
    alert(`Приветствуем тебя, ${userName}`);
    handleClose();
  }

  return (
    <>
      <Button variant='warning' className='mx-2' onClick={handleShow}>
        show Модальное окно
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
              <Form.Label>Введите ваше имя</Form.Label>
              <Form.Control
                type='text'
                placeholder='Пользователь...'
                name='user'
                onChange={(e) => setUserName(e.target.value.trim())}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>

        <Modal.Footer>

          <Button variant="primary" type='submit' onClick={handleSubmit}>
            Submit login
          </Button>

        </Modal.Footer>

      </Modal>
    </>
  );
}
