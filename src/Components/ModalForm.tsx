import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { trans } from '../modules/util';


interface ModalProps {
  isVisible?: boolean;  
  onHide: () => void;
}

export function ModalForm( {onHide, isVisible}: ModalProps ) {
  // const [show, setShow] = useState(isVisible);
  const [userName, setUserName] = useState('');
  const [btnDisable, setDisable] = useState(true);

  // todo latUser -> nickName
  // todo cyrUser -> userName
  

  // открыть
  const handleShow = () => {
    setShow(true);
    console.log('it open');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();    
    console.log('userName: ', userName);
    alert(`Приветствуем тебя, ${userName}`);
    // handleClose();
    // onHide();
  }

  const handleInputChange = (e: React.SyntheticEvent) => {
    const value: string = (e.target as HTMLInputElement).value;
    setUserName(() => {
      const cyrValue = value.replace(/^\s+|\s+$|\s+(?=\s)/g, "").toLowerCase();
      const latValue = trans(cyrValue);
      return latValue;
    });
    
  }

  return (
    <>
      <Modal show={isVisible} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>Modal Login Form</Modal.Title>
          <p>debug {userName}</p>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onHide}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
              <Form.Label>Введите ваше имя</Form.Label>
              <Form.Control
                type='text'
                placeholder='Пользователь...'
                name='user'
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            type='submit'
            onClick={handleSubmit}
            disabled={btnDisable}
          >
            Submit login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
