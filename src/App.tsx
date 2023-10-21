import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from './Components/Title';
import { FormTask } from './Components/FormTask';
import { TableTask } from './Components/TableTask';
import { TITLE, STORAGE_KEY } from './Data/consts';
import { useState } from 'react';
import { useToggle } from './modules/Hooks/useToggle';
import { ModalForm } from './Components/ModalForm';
import { getRandomId } from './modules/util';
import { ITask } from './modules/Task';

console.log('TITLE: ', TITLE);
console.log('STORAGE_KEY: ', STORAGE_KEY);


function App() {
  const [isVisible, setVisible] = useToggle(false);

  // DEBUG
  const testData: Array<ITask> = [
    {
      'id': getRandomId(),
      'description': 'Купить кота',
      'priority': 'light',
      'status': 'wait',
    },
    {
      'id': getRandomId(),
      'description': 'Купить кота',
      'priority': 'light',
      'status': 'wait',
    },
    {
      'id': getRandomId(),
      'description': 'Купить кота',
      'priority': 'light',
      'status': 'wait',
    },
    {
      'id': getRandomId(),
      'description': 'Обычно помыть кота',
      'priority': 'light',
      'status': 'wait',
    },
  ];

  const [data, setData] = useState(testData);
  
  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    console.log('Remove click');
    console.log(event.target);
    console.log(id);
    setData((data) => data.filter((task) => task.id !== id));
  }
  
  const handleDoneClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    console.log('Done click');
    console.log(event.target);
    console.log(id);
    
    setData((data) => data.map((task) => {
      const newTask: ITask = (task.id === id) ? {...task, status: 'done'} : {...task};
      return newTask;
    }));
  }


  return (
    <div className='app app-container  d-flex align-items-center justify-content-center flex-column'>
      <ModalForm isVisible={isVisible} />

      <Title text={TITLE} />

      {/* <FormTask data={data} setData={setData}/> */}

      <TableTask data={data} onRemove={handleRemoveClick} onDone={handleDoneClick} />
    </div>
  )
}

export default App
