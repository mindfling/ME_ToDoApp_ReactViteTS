// import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button, FormControl } from "react-bootstrap";
import React, { useState } from 'react';

// type Props = {}

export const FormTask = () => {
  
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submited and save to storage');
    console.log(e.target);
    console.log(e.currentTarget.name);
    console.log('after submit value: \"', value.replace(/(\s\s*)/g, ' ').toLowerCase(), '\"'); // удаляем лишние пробелы
  }
  
  const handleButtonClick = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('click button submit', e.currentTarget);
  }
  
  const handleClickReset = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('click button reset', e.currentTarget);
  }

  return (
    <Form className='form-task d-flex justify-content my-3' onSubmit={handleSubmit}>
      <FormControl
        type='text'
        placeholder='Начните вводить...'
        name='task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className='mx-2 ms-4' variant="primary" type="submit" onClick={handleButtonClick}>Submit</Button>
      <Button variant="warning" type="reset" onClick={handleClickReset}>Reset</Button>
    </Form>
  )
};
