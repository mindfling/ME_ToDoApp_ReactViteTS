import { Button } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';

type Props = {
  variant?: string;
  className?: string;
  disable?: boolean;
}

const ButtonRemove = (props: Props) => {
  return (
    <Button
      variant={props.variant ? props.variant : 'danger'}
      className={props.className ? props.className : 'mx-2'}
    >
      Delete task
      <X className='ms-1'/>
    </Button>
  )
}

export default ButtonRemove