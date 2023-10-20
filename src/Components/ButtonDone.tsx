// * Компонент Кнопка удаления задания

import { Button } from 'react-bootstrap';
import { CheckLg } from 'react-bootstrap-icons';

interface ButtonDonePros {
  variant?: string;
  className?: string;
  disable?: boolean;
  title?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonDone = (props: ButtonDonePros) => {
  return (
    <Button onClick={props.onClick}
      title='Завершить выполнение задачи'
      variant={props.variant ? props.variant : 'success'}
      className={props.className ? props.className : 'mx-1'}
    >
      Завершить
      <CheckLg className='ms-1'/>
    </Button>
  )
}

export default ButtonDone;
