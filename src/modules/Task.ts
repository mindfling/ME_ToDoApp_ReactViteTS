// * отдельная задача

import { getRandomId } from "./util";

export type TPriority = 'light' | 'warning' | 'danger';
export type TStatus = 'wait' | 'done';


export interface ITask {
  id: string; // psevdo unic ID
  description: string; // описание
  priority: TPriority; // приоритет выполнения
  status: TStatus; // текущий статус задачи
};


// * Класс Задача
export class Task implements ITask {
  public id: string;
  public description: string;
  public priority: TPriority;
  public status: TStatus;
  
  constructor(description: string, priority: TPriority) {
    this.id = getRandomId();
    this.description = description;
    this.priority = priority;
    this.status = "wait";
  }
}
