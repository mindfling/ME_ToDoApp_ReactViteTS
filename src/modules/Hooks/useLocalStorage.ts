// todo useLocalStorage
import React, { useState, useEffect } from 'react';
import { ITask } from "../Task";

// ! it works ! but only tasks
// * hook для localStorage
export const useLocalStorage = (initValue: Array<ITask>, key: string) : [Array<ITask>, React.Dispatch<React.SetStateAction<ITask[]>>] => {

  const getValue = (): Array<ITask> => {
    const rawData: string | null = localStorage.getItem(key);
    const testData: Array<ITask> = (rawData) ? JSON.parse(rawData) : initValue;
    return testData;
  }

  const [value, setValue] = useState(getValue); //?
  
  useEffect(() => {
    console.log('use effect of', value);
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  
  return [value, setValue];
}
