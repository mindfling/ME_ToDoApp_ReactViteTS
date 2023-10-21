import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from './Components/Title';
import { FormTask } from './Components/FormTask';
import { TableTask } from './Components/TableTask';
import { TITLE, STORAGE_KEY } from './Data/consts';
import { useToggle } from './modules/Hooks/useToggle';
import { ModalForm } from './Components/ModalForm';
import { ITask } from './modules/Task';
import { useLocalStorage } from './modules/Hooks/useLocalStorage'; // мой hook

console.log('TITLE: ', TITLE);
console.log('STORAGE_KEY: ', STORAGE_KEY);


export const App = () => {

  const [isVisible, setVisible] = useToggle(true);

  const [data, setData] = useLocalStorage([], STORAGE_KEY);

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    setData((data) => {
      const newArray: Array<ITask> = data.filter((task) => task.id !== id);
      return newArray;
    });
  }

  const handleDoneClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    setData((data) => {
      const newArray = data.map((task) => {
        const newTask: ITask = (task.id === id) ? { ...task, status: 'done' } : { ...task };
        return newTask;
      });
      return newArray;
    });
  }



  const modalClose = () => {
    setVisible(false);
  }

  return (
    <div className='app app-container d-flex align-items-center justify-content-center flex-column'>
      {(isVisible) ? (
        <>
          <ModalForm isVisible={isVisible} onHide={modalClose} />
          <p>Обновите страницу</p>
        </>
      ) : (
        <>
          <Title text={TITLE} />
          <FormTask data={data} setData={setData} />
          <TableTask data={data} onRemove={handleRemoveClick} onDone={handleDoneClick} />
        </>
      )
      }
    </div>
  )
}
