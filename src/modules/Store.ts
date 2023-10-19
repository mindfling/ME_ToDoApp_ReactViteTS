// * обработчик хранилища данных

type TStorage = string | null; //?

export interface ITask {
  id: string;
  description: string;
  priority: 'light' | 'warning' | 'danger';
  status: 'wait' | 'done';
};


export class Store {
  private _taskList: Array<ITask>;
  private _storageKey: string;
  
  
  public get storageKey(): string {
    return this._storageKey;
  }
  // public set storageKey(value: string) {
  //   this._storageKey = value;
  // }
  
  public get taskList(): Array<ITask> {
    return this._taskList;
  }
  
  public set taskList(list: Array<ITask>) {
    this._taskList = list;
  }
  
  
  // * конструктор
  public constructor(storageKey: string) {
    console.log('constructor store');
    this._storageKey = storageKey;
    this._taskList = this.getData(); // получаем массив данных из хранилища
    console.log('constructor finished');
  }
  
  
  // * остальные методы работы с хранилищем
  // получаем массив данных
  private getData(): Array<ITask> {
    const rawData: TStorage = localStorage.getItem(this._storageKey);
    console.log('getData rawData: ', rawData); // todo debug
    const data: Array<ITask> = (rawData ? JSON.parse(rawData) : []);
    console.log('get storage data: ', data);
    return data;
  }
  
  // загружаем массив данных
  public setData(data: Array<ITask>): void {
    localStorage.setItem(this._storageKey, JSON.stringify(data));
  }
  
  //
  public addTask(task: ITask): void {
    // const data: Array<ITask> = this.getData(); //?
    console.log('before additing taskList: ', this.taskList);
    this.taskList.push(task); // update taskList
    console.log('after additing taskList: ', this.taskList);
    this.setData(this.taskList); // сохраняем
  }
  
  //
  public removeTask(taskID: string): boolean {
    // const data: Array<ITask> = this.getData(); //?
    const index = this.taskList.findIndex((task: ITask) => task.id === taskID);
    console.log('index task for remove: ', index);
    if (index > -1) {
      console.log("найден task для удаления");
      const newData: Array<ITask> = this.taskList.filter((task: ITask) => task.id !== taskID); // фильтруем
      this._taskList = newData; // обновляем список
      this.setData(this.taskList); // сохраняем
      return true;
    }
    console.log('таск не найден Ничего Не Удалено');
    return false;
  }
  
  //
  public finishTask(taskID: string): void {
    // const data: Array<ITask> = getTaskData(storageKey);
    const newData: Array<ITask> = this.taskList.map((value: ITask) => {
      if (value.id === taskID) {
        value.status = (value.status === 'wait') ? 'done' : value.status; // меняем статус на завершить
      }
      return value;
    });
    
    this.setData(newData); // сохраняем обновленные данные
  }
  
}
