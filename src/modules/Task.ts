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
  private _id: string;
  public description: string;
  public priority: TPriority;
  public status: TStatus;
  
  
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  
  constructor(description: string, priority: TPriority) {
    this._id = getRandomId();
    this.description = description;
    this.priority = priority;
    this.status = "wait";
  }
}
