import { db } from '../db';
import { useLiveQuery } from 'dexie-react-hooks';

db.tasks.clear();

export const useTasks = () => {
  const tasks = useLiveQuery(() => db.tasks.toArray(), []) || [];

  const addTask = (text: string) =>
    db.tasks.add({ text, completed: false });

  const toggleTask = (id: number, completed: boolean) =>
    db.tasks.update(id, { completed: !completed });

  const deleteTask = (id: number) => db.tasks.delete(id);

  return { tasks, addTask, toggleTask, deleteTask };
};