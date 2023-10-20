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

export const MyTable = (props: TableProps) => {
  
  const [store, setStore] = useState(props.store);
  const [data, setData] = useState(store.taskList);
  

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const delTaskID: string = ((event.target as HTMLButtonElement).closest('.table-row') as HTMLTableRowElement).id;
    const delTaskRow: HTMLElement | null = document.getElementById(delTaskID); //? какой здесь тип ?
  }

  const handleDoneClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const doneTaskID: string = ((event.target as HTMLButtonElement).closest('.table-row') as HTMLTableRowElement).id;
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
