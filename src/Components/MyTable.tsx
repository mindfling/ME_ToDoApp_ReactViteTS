// import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { ArrowReturnLeft, CheckLg, X } from 'react-bootstrap-icons';
import ButtonRemove from './ButtonRemove';
import ButtonDone from './ButtonDone';

import { toCapitalizeString } from '../Data/util';

// type Props = {}

import { ITask, testData, } from '../Data/TestData';

const MyTable = () => {

  const data: Array<ITask> = testData;

  console.log(`data`, data);

  return (
    <Table className="table" bordered hover>
      <caption>Список <code>List</code> дел пользователя <code>User</code></caption>
      <thead>
        <tr>
          <th>№</th> {/* id: string */}
          <th>Задача</th> {/* task: string */}
          <th>Статус</th> {/* status: 'wait' | 'done' */}
          <th>Действия</th> {/* action: remove or done */}
          {/* color priority: 'light' | 'warning' | 'danger' */}
        </tr>
      </thead>
      <tbody>

        {data.map((task: ITask, i: number) => (
          <tr className={'table-' + task.priority}> {/* row */}
            <th>{i + 1}</th> {/* cell number id */}
            <td className={'task' + (task.status === 'done' ? ' text-decoration-line-through' : '')} title={task.status === 'done' ? 'Уже сделано' : (task.priority === 'danger' ? 'Поторопитесь' : (task.priority === 'warning' ? 'Важно' : 'Как обычно')) + ' ' + task.description.toLowerCase()}>{toCapitalizeString(task.description)}</td> {/* task description */}
            <td>{(task.status === 'wait') ? 'Ожидает' : 'Готово'}</td> {/* status текст В процессе*/}
            <td> {/* action */}
              <ButtonRemove />
              <ButtonDone />
            </td>
          </tr>
        ))}

      </tbody>
    </Table>
  )
}

export default MyTable;