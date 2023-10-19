// * Компонент Кнопка удаления задания

import { Button } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';

interface ButtonProps {
  variant?: string;
  className?: string;
  disable?: boolean;
  title?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonRemove = (props: ButtonProps) => {
  
  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(((event.target as HTMLButtonElement).closest('.table-row') as HTMLTableRowElement).id); //? какой здесь тип ?
  } 
  
  
  return (
    <Button onClick={handleRemoveClick}
      title='Удалить задачу из списка'
      variant={props.variant ? props.variant : 'danger'}
      className={props.className ? props.className : 'mx-1'}
    >
      Удалить
      <X className='ms-1'/>
    </Button>
  )
}

export default ButtonRemove;
