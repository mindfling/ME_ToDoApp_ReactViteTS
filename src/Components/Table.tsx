import React from 'react'

type Props = {}

const Table = (props: Props) => {
  return (
    <div className="table-wrapper">
    <table className="table table-hover table-bordered">
      <caption>List of all dooo</caption>
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
            <button className="btn btn-danger">
              Удалить
            </button>
            <button className="btn btn-success">
              Завершить
            </button>
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
            </button>
            <button className="btn btn-success">
              Завершить
            </button>
          </td>
        </tr>

        <tr className="table-secondary">
          <td>2</td>
          <td className="text-decoration">
            Помыть кота
          </td>
          <td>Выполнена</td>
          <td>
            <button className="btn btn-outline-danger">
              Удалить
            </button>
            <button className="btn btn-outline-primary">
              Завершить
            </button>
          </td>
        </tr>

        <tr className="table-secondary">
          <td>2</td>
          <td className="text-decoration">
            Помыть кота
          </td>
          <td>Выполнена</td>
          <td>
            <button className="btn btn-outline-warning btn-sm">
              Удалить
            </button>
            <button className="btn btn-outline-primary btn-outline-dark btn-sm">
              Завершить
            </button>
          </td>
        </tr>


      </tbody>
    </table>
  </div>
  )
}


export default Table;