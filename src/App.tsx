import { useState } from 'react';
import './App.css';
import KanbanColumn from './components/KanbanColumn';

type Task = {
  id: number;
  title: string;
  column: number;
};

const columns = ['To Do', 'Doing', 'Done'];

const initialTasks: Task[] = [
  { id: 1, title: 'Create a Kanban board app', column: 0 },
  { id: 2, title: 'Buy groceries', column: 1 },
  { id: 3, title: 'Have a party', column: 2 },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const moveTask = (id: number, direction: -1 | 1) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, column: task.column + direction } : task
      )
    );
  };

  return (
    <div className="kanban-board">
      {columns.map((title, index) => (
        <KanbanColumn
          key={index}
          title={title}
          columnIndex={index}
          maxColumn={columns.length - 1}
          tasks={tasks.filter(task => task.column === index)}
          onMove={moveTask}
        />
      ))}
    </div>
  );
}

export default App;
