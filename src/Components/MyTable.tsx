// import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { ArrowReturnLeft, CheckLg, X } from 'react-bootstrap-icons';
import ButtonRemove from './ButtonRemove';
import ButtonDone from './ButtonDone';

// type Props = {}

import { ITask, testData,  } from '../Data/TestData';

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

      

        <tr className="table-light">
          <td>1</td> {/* id */}
          <td className="task">Купить слона</td> {/* task */}
          <td>В процессе</td> {/* status */}
          <td> {/* action */}
            <Button variant='outline-danger' className='mx-2'>
              Удалить
              <X className='ms-2' />
            </Button>
            <Button variant='outline-success' className='mx-2' disabled >
              Завершить
              <ArrowReturnLeft className='mx-2' />
            </Button>
          </td>
        </tr>

        <tr className="table-light">
          <td>1</td>
          <td className="task">
            Купить игру для Кота
          </td>
          <td>В процессе</td>
          <td>
            <Button variant='outline-danger' className='mx-2' disabled >
              Удалить
              <ArrowReturnLeft className='ms-2' />
            </Button>

            <Button variant='outline-success' className='mx-2'>
              <CheckLg className='me-2' />
              Завершить
            </Button>
          </td>
        </tr>

        <tr className="table-success">
          <td>2</td>
          <td className="text-decoration-line-through">
            Помыть кота
          </td>
          <td>Выполнена</td>
          <td>
            <button className="btn btn-danger disabled ">
              Удалить
              <X className='ms-2' />
            </button>
            <button className="btn btn-success ms-1">
              Завершить
              <CheckLg className='ms-2' />
            </button>
          </td>
        </tr>

        <tr className="table-secondary">
          <td>2</td>
          <td className="text-decoration">
            Сполоснуть кота
          </td>
          <td>Выполнена</td>
          <td>
            <ButtonRemove />
            <ButtonDone />
          </td>
        </tr>

        <tr className="table-warning">
          <td>2</td>
          <td className="text-decoration">
            Высушить кота
          </td>
          <td>Выполнена</td>
          <td>
            <ButtonRemove variant='outline-danger'/>
            <ButtonDone variant='outline-success'/>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default MyTable;