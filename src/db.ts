import Dexie, { type Table } from 'dexie';

// Aquí definimos cómo se ve una tarea
export interface Task {
  id?: number;
  text: string;
  completed: boolean;
}

// Aquí creamos la base de datos
export class TaskDB extends Dexie {
  tasks!: Table<Task>;
  constructor() {
    super('TaskDB');
    this.version(1).stores({ tasks: '++id, text, completed' });
  }
}

export const db = new TaskDB();