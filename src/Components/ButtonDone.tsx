// * Компонент Кнопка удаления задания

import { Button } from 'react-bootstrap';
import { CheckLg } from 'react-bootstrap-icons';

interface Props {
  variant?: string;
  className?: string;
  disable?: boolean;
  title?: string;
}

const ButtonDone = (props: Props) => {
  return (
    <Button
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
