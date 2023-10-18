// import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { ArrowReturnLeft, CheckLg, X } from 'react-bootstrap-icons';

// type Props = {}

export type Task = {
  id: string;
  description: string;
  priority: 'light' | 'warning' | 'danger';
  status: 'wait' | 'done';
};

const MyTable = () => {

  // todo test taskList data
  const data: Array<Task> = [
    { 
      'id': '1fcneui5nc_18ae8e44bb2',
      'description': 'Помыть кота',
      'priority': 'light',
      'status': 'wait',
    },
    { 
      'id': '5p9etkr5pg_18b42fbeb51',
      'description': 'Обычно помыть кота',
      'priority': 'light',
      'status': 'wait',
    },
    { 
      'id': 'nm8p43avpm_18b42fc1ef8',
      'description': 'Важно помыть кота',
      'priority': 'warning',
      'status': 'wait',
    },
    { 
      'id': '8snk7aeotl_18b42fc7888',
      'description': 'Срочно помыть кота',
      'priority': 'danger',
      'status': 'wait',
    },
    { 
      'id': 'skh1dk9hoh_18b431cb383',
      'description': 'Уже помыл кота как обычно',
      'priority': 'light',
      'status': 'done',
    },
  ]

  console.log(`data`, data);

  return (
    <Table className="table" bordered hover>
      <caption>List of Список дел</caption>
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
            <button className="btn btn-danger">
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
            <button className="btn btn-danger">
              Удалить
              <ArrowReturnLeft className='ms-2' />
            </button>
            <button className="btn btn-success ms-1">
              Завершить
              <CheckLg className='ms-2' />
            </button>
          </td>
        </tr>

        <tr className="table-warning">
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
              <CheckLg className='ms-2' />
            </button>
          </td>
        </tr>


      </tbody>
    </Table>
  )
}

export default MyTable;