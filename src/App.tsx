import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import { TaskForm } from './components/TaskForm';
import { TaskItem } from './components/TaskItem';
import { Filters, type FilterType } from './components/Filters';

export default function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState<FilterType>('all');
  const [search, setSearch] = useState('');

  const visible = tasks
    .filter((t) => filter === 'all' || 
      (filter === 'pending' && !t.completed) || 
      (filter === 'done' && t.completed))
    .filter((t) => t.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div id="app-tareas" className="app">
      <h1>✅ Mi Lista de Tareas</h1>
      <TaskForm onAdd={addTask} />
      <Filters {...{ filter, setFilter, search, setSearch }} />
      <div className="task-list">
        {visible.map((task) => (
          <TaskItem key={task.id} task={task} 
            onToggle={toggleTask} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
}