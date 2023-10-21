// todo useLocalStorage
import React, { useState, useEffect } from 'react';
import { ITask } from "../Task";


// * hook для localStorage
export const useLocalStorage = (
    initValue: Array<ITask>,
    key: string
  ) : [
    Array<ITask>,
    React.Dispatch<React.SetStateAction<ITask[]>>
  ] => {

    console.log('in key', key);
    
  const getValue = (): Array<ITask> => {
    const rawData: string | null = localStorage.getItem(key);
    const testData: Array<ITask> = (rawData) ? JSON.parse(rawData) : initValue;
    return testData;
  }

  const [value, setValue] = useState(getValue);
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  
  return [value, setValue];
}
