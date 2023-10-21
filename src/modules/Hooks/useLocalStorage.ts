// todo useLocalStorage
import React, { useState, useEffect } from 'react';
import { ITask } from "../Task";


// * hook для localStorage
export const useLocalStorage = (
  initValue: Array<ITask>,
  key: string
): [
    Array<ITask>,
    React.Dispatch<React.SetStateAction<ITask[]>>
] => {

  console.log('in key', key);
  const storageKey: string = `todo_${key}`;

  const getValue = (): Array<ITask> => {
    const rawData: string | null = localStorage.getItem(storageKey);
    const testData: Array<ITask> = (rawData) ? JSON.parse(rawData) : initValue;
    return testData;
  }

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    console.log('key useEffect: ', key);
    if (key) {
      console.log('key in useEffect: ', key);
      localStorage.setItem(storageKey, JSON.stringify(value));
    }
    
  }, [value]);

  return [value, setValue];
}
