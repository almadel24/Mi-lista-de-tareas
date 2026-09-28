import type { Task } from './interfaces/task';

const KEY = 'tasks';

export const db = {
  getAll: (): Task[] => {
    const saved = localStorage.getItem(KEY);
    return saved ? JSON.parse(saved) : [];
  },
  save: (tasks: Task[]) => {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  },
};