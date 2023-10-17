// import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { ArrowRight, ArrowReturnLeft, CheckLg, FileX } from 'react-bootstrap-icons';
import { MDBIcon } from 'mdb-react-ui-kit';

// type Props = {}

const MyTable = () => {
  return (
    <Table className="table" bordered hover>
      <caption>List of Список дел</caption>
      <thead>
        <tr>
          <th>№</th>
          <th>Задача</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
      </thead>

      <tbody>
        <tr className="table-light">
          <td>1</td>
          <td className="task">
            Купить слона
          </td>
          <td>В процессе</td>
          <td>
            <Button variant='outline-danger' className='mx-2'>
              Удалить
              <ArrowReturnLeft className='ms-2' />
              </Button>

            <Button variant='outline-success' className='mx-2'>
              <CheckLg className='me-2'/>
              Завершить
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
            <Button variant='outline-danger' className='mx-2'>
              Удалить
              <ArrowReturnLeft className='ms-2' />
              </Button>

            <Button variant='outline-success' className='mx-2'>
              <CheckLg className='me-2'/>
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
            <button className="btn btn-danger">
              Удалить
              <ArrowReturnLeft className='ms-2' />
            </button>
            <button className="btn btn-success ms-1">
              Завершить
              <CheckLg className='ms-2'/>
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
          <button className="btn btn-danger">
              Удалить
              <ArrowReturnLeft className='ms-2' />
            </button>
            <button className="btn btn-success ms-1">
              Завершить
              <CheckLg className='ms-2'/>
            </button>
          </td>
        </tr>

        <tr className="table-secondary">
          <td>2</td>
          <td className="text-decoration">
            Высушить кота
          </td>
          <td>Выполнена</td>
          <td>
          <button className="btn btn-outline-danger mx-2">
              Удалить
              <ArrowReturnLeft className='ms-2' />
            </button>
            <button className="btn btn-outline-success mx-2">
              Завершить
              <CheckLg className='ms-2'/>
            </button>
          </td>
        </tr>


      </tbody>
    </Table>
  )
}

export default MyTable;