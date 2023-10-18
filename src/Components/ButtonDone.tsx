import { Button } from 'react-bootstrap';
import { CheckLg } from 'react-bootstrap-icons';

type Props = {
  variant?: string;
  className?: string;
  disable?: boolean;
}

const ButtonDelete = (props: Props) => {
  return (
    <Button
      title='завершить выполнение задачи'
      variant={props.variant ? props.variant : 'success'}
      className={props.className ? props.className : 'mx-2'}
    >
      Завершить
      <CheckLg className='ms-1'/>
    </Button>
  )
}

export default ButtonDelete;
