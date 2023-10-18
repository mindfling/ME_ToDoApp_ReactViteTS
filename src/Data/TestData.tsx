// * test data for debug

import { getRandomId } from "./util";

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
    'description': 'Помыть кота',
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
    'id': 'nm8p43avpm_18b42fc1ef8',
    'description': 'Важно помыть кота',
    'priority': 'warning',
    'status': 'wait',
  },
  { 
    'id': '8snk7aeotl_18b42fc7888',
    'description': 'Срочно помыть кота',
    'priority': 'danger',
    'status': 'wait',
  },
  { 
    'id': 'skh1dk9hoh_18b431cb383',
    'description': 'Уже помыл кота как обычно',
    'priority': 'light',
    'status': 'done',
  },
];
