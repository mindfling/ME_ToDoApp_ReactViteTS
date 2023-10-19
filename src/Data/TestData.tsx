// * test data for debug

import { getRandomId } from "../modules/util"; 

export interface ITask {
  id: string;
  description: string;
  priority: 'light' | 'warning' | 'danger';
  status: 'wait' | 'done';
};

// тестовые данные для отладки списка дел
// todo test taskList data
export const testData: Array<ITask> = [
  { 
    'id': getRandomId(),
    'description': 'Купить кота',
    'priority': 'light',
    'status': 'wait',
  },
  { 
    'id': getRandomId(),
    'description': 'Обычно помыть кота',
    'priority': 'light',
    'status': 'wait',
  },
  { 
    'id': getRandomId(),
    'description': 'Важно Сполоснуть кота',
    'priority': 'warning',
    'status': 'wait',
  },
  { 
    'id': getRandomId(),
    'description': 'Срочно ВЫСУШИТЬ кота',
    'priority': 'danger',
    'status': 'wait',
  },
  { 
    'id': getRandomId(),
    'description': 'СРОЧНО покормить кота',
    'priority': 'danger',
    'status': 'wait',
  },
  { 
    'id': getRandomId(),
    'description': 'УЖЕ помыл кота как обычно',
    'priority': 'light',
    'status': 'done',
  },
];
