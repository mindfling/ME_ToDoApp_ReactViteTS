// работа local storage
import { ITask } from "../Data/TestData"; // тип Задача task


// получаем ВЕСЬ список дел из хранилища
export const getTaskData = (storageKey: string): ITask[] => {
  type TStorage = string | null;
  const data: TStorage = localStorage.getItem(storageKey);
  console.log('storage data getTaskData', data);
  return (data ? JSON.parse(data) : []);
}


// выгружаем список в хранилище
export const setTaskData = (storageKey: string, data: ITask[]): void => {
  localStorage.setItem(storageKey, JSON.stringify(data));
}


// добавляем следующую задачу по списку
export const addTaskData = (storageKey: string, task: ITask) => {
  const data: ITask[] = getTaskData(storageKey); // получаем
  data.push(task); // апдейтим
  const newData = data;
  setTaskData(storageKey, newData) // записываем обратно
}


// удаляем задачу по id
export const removeTaskData = (storageKey: string, id: string) => {
  const data: ITask[] = getTaskData(storageKey); // получаем
  const newData: ITask[] = data.filter((task: ITask) => task.id !== id)
  setTaskData(storageKey, newData); // перезаписываем
}

