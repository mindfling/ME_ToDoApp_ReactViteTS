// import React from 'react'
import Table from 'react-bootstrap/Table'

import ButtonRemove from './ButtonRemove';
import ButtonDone from './ButtonDone';

import { toCapitalizeString } from '../modules/util';
import { Store } from '../modules/Store';
import { ITask } from '../modules/Task';
import { useState } from 'react';


interface TableProps {
  store: Store;
}

const MyTable = (props: TableProps) => {
  
  const [store, setStore] = useState(props.store);
  // const data: Array<ITask> = store.taskList;
  const [data, setData] = useState(store.taskList);
  

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.warn('REMOVE');
    console.log(event.target);
    console.log((event.target as HTMLButtonElement).closest('.table-row'));
    const delTaskID: string = ((event.target as HTMLButtonElement).closest('.table-row') as HTMLTableRowElement).id;
    console.log('Удалить задание', delTaskID); //? какой здесь тип ?
    const delTaskRow: HTMLElement | null = document.getElementById(delTaskID); //? какой здесь тип ?

    // if (delTaskRow instanceof HTMLTableRowElement) {
    //   delTaskRow.remove();
    // }
    store.removeTask(delTaskID);
  }

  const handleDoneClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // ? ПОЧЕМУ НЕ РАБОТАЕТ ?
    console.warn('DONE');
    console.log(event.target);
    console.log((event.target as HTMLButtonElement).closest('.table-row'));
    const doneTaskID: string = ((event.target as HTMLButtonElement).closest('.table-row') as HTMLTableRowElement).id;
    console.log('Выполнить задание', doneTaskID); //? какой здесь тип ?
    // const doneTaskRow: HTMLElement | null = document.getElementById(doneTaskID); //? какой здесь тип ?
    // store.finishTask(doneTaskID);
    // setData((data) => {
    //   console.log('set store finish');
    //   store.finishTask(doneTaskID);
    //   return store.taskList;
    // });
    
  }

  return (
    <Table className="table" bordered hover>
      <caption>Список <code>List</code> дел пользователя <code>User</code></caption>
      <thead>
        <tr>
          <th>№</th>
          <th>Задача</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {data.map((task: ITask, i: number) => {
          console.log('in map task: ', task.id);
          
          return (
            <tr className={'table-row table-' + task.priority} key={'table-row-0' + (i + 1)} id={task.id}>
              <th>{`0${1 + i}`}</th>
              <td className={'task' + (task.status === 'done' ? ' text-decoration-line-through' : '')} title={task.status === 'done' ? 'Уже сделано' : (task.priority === 'danger' ? 'Поторопитесь' : (task.priority === 'warning' ? 'Важно' : 'Как обычно')) + ' ' + task.description.toLowerCase()}>{toCapitalizeString(task.description)}</td>
              <td>{(task.status === 'wait') ? 'Ожидает' : 'Готово'}</td>
              <td>
                <ButtonRemove onClick={handleRemoveClick} />
                <ButtonDone onClick={handleDoneClick} />
              </td>
            </tr>
          )
        })}

      </tbody>
    </Table>
  )
}

export default MyTable;