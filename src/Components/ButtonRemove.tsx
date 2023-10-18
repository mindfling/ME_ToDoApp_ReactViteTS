import { Button } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';

interface ButtonProps {
  variant?: string;
  className?: string;
  disable?: boolean;
}

const ButtonRemove = (props: ButtonProps) => {
  return (
    <Button
      title='удалить задачу из списка'
      variant={props.variant ? props.variant : 'danger'}
      className={props.className ? props.className : 'mx-2'}
    >
      Удалить
      <X className='ms-1'/>
    </Button>
  )
}

export default ButtonRemove