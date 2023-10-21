import Table from 'react-bootstrap/Table'
import ButtonRemove from './ButtonRemove';
import ButtonDone from './ButtonDone';
import { ITask } from '../modules/Task';
import { toCapitalizeString } from '../modules/util';


interface TableProps {
  onDone: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
  onRemove: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
  data: Array<ITask>;
}

export const TableTask = ({
  data,
  onRemove,
  onDone
}: TableProps) => {

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
          const titleStatus: string = (task.status === 'done') ?
                'Уже сделано' :
                ( task.priority === 'danger' ?
                    'Поторопитесь' :
                    (task.priority === 'warning' ? 'Важно' : 'Как обычно')
                ) + ' ' + task.description.toLowerCase();
          return (
            <tr className={'table-row table-' + task.priority} key={task.id} id={task.id}>
              <th>{`0${1 + i}`}</th>
              <td
                className={'task' + (task.status === 'done' ? ' text-decoration-line-through' : '')} 
                title={titleStatus}
              >
                {toCapitalizeString(task.description)}
              </td>
              <td>{(task.status === 'wait') ? 'Ожидает' : 'Готово'}</td>
              <td>
                <ButtonRemove onClick={(e) => onRemove(e, task.id)} />
                <ButtonDone onClick={(e) => onDone(e, task.id)} />
              </td>
            </tr>
          )
        })}

      </tbody>
    </Table>
  )
}
