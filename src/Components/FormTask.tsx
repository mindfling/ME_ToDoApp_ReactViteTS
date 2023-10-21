// import React from 'react'
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { ITask, TPriority, Task } from '../modules/Task';
import { STORAGE_KEY } from '../Data/consts';


interface Props {
  data: Array<ITask>;
  setData: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const FormTask = ({data, setData}: Props) => {
  const [inputValue, setInputValue] = useState(''); // input inputValue
  // const [isDisable, setDisabled] = useState(true); // активация кнопок формы
  
  // * submit
  // todo validation 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const description: string = inputValue.replace(/^\s+|\s+$|\s+(?=\s)/g, "").toLowerCase();
    const defaultPriority: TPriority = 'light';
    const task: ITask = new Task(description, defaultPriority);
    
    // todo useStorage
    setData((data) => {
      const newArray: Array<ITask> = [...data, task];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newArray));
      return newArray;
    });

    setInputValue(''); // очищаем поле ввода
  }
  
  // * simple button click
  const handleButtonClick = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('click button submit', e.currentTarget);
  }
  
  // * reset
  const handleClickReset = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('click button reset', e.currentTarget);
    setInputValue('');
  }
  
  // * событие изменения input
  const handleControlChange = (e: React.SyntheticEvent) => {
    setInputValue((e.target as HTMLInputElement).value);
  }

  return (
    <Form className='form-task d-flex justify-content my-3' onSubmit={handleSubmit}>
      <FormControl
        type='text'
        placeholder='Начните вводить...'
        title='Просто введите краткое описание задачи'
        name='task'
        value={inputValue}
        onChange={handleControlChange}
      />
      <Button className='ms-4 me-2' variant="primary" type="submit" onClick={handleButtonClick}>Submit</Button>
      <Button variant="warning" type="reset" onClick={handleClickReset}>Reset</Button>
    </Form>
  )
};
