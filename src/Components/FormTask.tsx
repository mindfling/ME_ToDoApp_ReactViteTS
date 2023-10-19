// import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button, FormControl } from "react-bootstrap";
import React, { useState } from 'react';
import { Store } from '../modules/Store';
import { ITask, Task } from '../modules/Task';


interface Props {
  store: Store;
}

export const FormTask = ({store}: Props) => {
  console.log('store in FormTask: ', store);
  
  const [value, setValue] = useState(''); // input value
  
  // * submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submited and save to storage');
    const description: string = value.replace(/(\s\s*)/g, ' ').toLowerCase().trim();
    // console.log('after submit value: \"', value.replace(/(\s\s*)/g, ' ').toLowerCase(), '\"'); // удаляем лишние пробелы
    console.log('description: ', description);
    
    const task: ITask = new Task(description, 'light');
    console.log('task in FormTask: ', task);
    
    store.addTask(task);
    console.log('add new task to store: ', store);
  }
  
  // * simple button click
  const handleButtonClick = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('click button submit', e.currentTarget);
  }
  
  // * reset
  const handleClickReset = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('click button reset', e.currentTarget);
  }
  

  return (
    <Form className='form-task d-flex justify-content my-3' onSubmit={handleSubmit}>
      <FormControl
        type='text'
        placeholder='Начните вводить...'
        title='Просто введите краткое описание задачи'
        name='task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className='mx-2 ms-4' variant="primary" type="submit" onClick={handleButtonClick}>Submit</Button>
      <Button variant="warning" type="reset" onClick={handleClickReset}>Reset</Button>
    </Form>
  )
};
