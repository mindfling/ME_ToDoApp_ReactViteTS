import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from './Components/Title';
import { FormTask } from './Components/FormTask';
import { TableTask } from './Components/TableTask';
import { TITLE, STORAGE_KEY } from './Data/consts';
import { ITask } from './modules/Task';
import { ModalForm } from './Components/ModalForm';
import React, { useState } from 'react';
import { useToggle } from './modules/Hooks/useToggle';
import { useLocalStorage } from './modules/Hooks/useLocalStorage'; // мой hook

console.log('TITLE: ', TITLE);
console.log('STORAGE_KEY: ', STORAGE_KEY);


export const App = () => {

  const [isVisible, setVisible] = useToggle(true);
  const [user, setUser] = useState({
    cyrName: '',
    nickName: '',
  });
  const storageKey: string = `${user.nickName}`;
  console.log('app storageKey: ', storageKey);
  const [data, setData] = useLocalStorage([], storageKey);
  console.log('app data: ', data);


  // удаление по кнопке id
  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    setData((data) => {
      const newArray: Array<ITask> = data.filter((task) => task.id !== id);
      return newArray;
    });
  }

  // завершение задачи по id
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
    alert(`Приветствуем тебя, ${user.cyrName} ака ${user.nickName}`);
  }

  return (
    <div className='app app-container d-flex align-items-center justify-content-center flex-column'>
      { isVisible && (
        <ModalForm
          user={user}
          setUser={setUser}
          isVisible={isVisible}
          onHide={modalClose}
        />
      )}
      { !isVisible && (
        <>
          <Title text={TITLE} />
          <FormTask data={data} setData={setData} />
          <TableTask data={data} onRemove={handleRemoveClick} onDone={handleDoneClick} />
        </>
      )}
    </div>
  )
}
