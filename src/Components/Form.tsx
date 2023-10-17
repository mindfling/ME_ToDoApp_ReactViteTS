import React from 'react'

type Props = {}

export const Form = () => {
  return (
      <form className="d-flex align-items-center mb-5">
        <label className="form-group me-3 mb-0">
          <input type="text" className="form-control" placeholder="ввести задачу" />
        </label>

        <button type="submit" className="btn btn-primary me-3">
          Сохранить
        </button>

        <button type="reset" className="btn btn-warning">
          Очистить
        </button>
      </form>
  )
}