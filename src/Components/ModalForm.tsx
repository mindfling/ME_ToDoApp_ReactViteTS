import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { trans } from '../modules/util';


interface User {
  cyrName: string; // имя на кириллице
  nickName: string; // ник пользователя на латинице
}

interface ModalProps {
  isVisible?: boolean;
  onHide: () => void;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}


export function ModalForm({ user, setUser, onHide, isVisible }: ModalProps) {

  const [btnDisable, setDisable] = useState(true);
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setUser((): User => {
      const cyrName = inputValue.replace(/^\s+|\s+$|\s+(?=\s)/g, "").toLowerCase();
      const nickName = trans(cyrName);

      return { cyrName, nickName };
    });

    onHide();
    alert(`Modal Приветствуем тебя, ${user.cyrName} ака ${user.nickName}`);
  }


  const handleInputChange = (e: React.SyntheticEvent) => {
    const value: string = (e.target as HTMLInputElement).value;
    
    setDisable(() => (value.length < 4));
    setInputValue(() => {
      return value; // inputValue.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    });
    console.log('input ', inputValue);
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
                // value={inputValue}
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
            // disabled={false}
          >
            Submit login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
