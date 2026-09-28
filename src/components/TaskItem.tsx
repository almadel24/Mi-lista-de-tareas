import type { Props } from '../interfaces/task-item';

export const TaskItem = ({ task, onToggle, onDelete }: Props) => (
  <div className="task-item">
    <input type="checkbox" checked={task.completed}
      onChange={() => onToggle(task.id!, task.completed)} />
    <div className={task.completed ? 'completed' : ''}>{task.text}</div>
    <div className={`badge ${task.completed ? 'done' : 'pending'}`}>
      {task.completed ? 'Completada' : 'Pendiente'}
    </div>
    <button onClick={() => onToggle(task.id!, task.completed)}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="3">
        <polyline points="4 12 9 17 20 6" />
      </svg>
    </button>
    <button onClick={() => onDelete(task.id!)}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />
      </svg>
    </button>
  </div>
);