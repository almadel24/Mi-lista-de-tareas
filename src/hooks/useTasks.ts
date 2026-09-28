import { useState, useEffect } from 'react';
import { db } from '../db';
import type { Task } from '../interfaces/task';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(() => db.getAll());

  useEffect(() => {
    db.save(tasks);
  }, [tasks]);

  const addTask = (text: string) =>
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);

  const toggleTask = (id: number) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTask = (id: number) =>
    setTasks(tasks.filter(t => t.id !== id));

  return { tasks, addTask, toggleTask, deleteTask };
};