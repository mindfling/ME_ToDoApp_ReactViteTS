import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { trans } from '../modules/util';


interface ModalProps {
  isVisible?: boolean;  
  onHide: () => void;
}

interface User {
  cyrName: string; // имя на кириллице
  nickName: string; // ник пользователя на латинице
}

export function ModalForm( {onHide, isVisible}: ModalProps ) {
  const [user, setUser] = useState({
    cyrName: '',
    nickName: '',
  });
  const [btnDisable, setDisable] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();    
    // alert(`Приветствуем тебя, ${user.cyrName} ${user.nickName}`);
    onHide();
  }

  const handleInputChange = (e: React.SyntheticEvent) => {
    const value: string = (e.target as HTMLInputElement).value;
    setUser((): User => {
      const cyrName = value.replace(/^\s+|\s+$|\s+(?=\s)/g, "").toLowerCase();
      const nickName = trans(cyrName);
      setDisable(() => {
        if (nickName.length >= 4) {
          return false; // активируем кнопку формы если ввел имя
        }
        return true;
      });
      return { cyrName, nickName};
    });
  }

  return (
    <>
      <Modal 
        show={isVisible}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Modal Login Form</Modal.Title>
          <p>debug {user.cyrName} {user.nickName} </p>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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
            variant="primary"
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
