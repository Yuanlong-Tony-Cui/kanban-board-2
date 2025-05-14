import { useState } from 'react';
import './App.css';
import KanbanColumn from './components/KanbanColumn';

type Task = {
  id: number;
  title: string;
  column: number;
};

const columns = ['To Do', 'Doing', 'Done'];

const defaultId = Date.now()

const initialTasks: Task[] = [
  { id: defaultId, title: 'Build a button-controlled Kanban board in React', column: 0},
  { id: defaultId, title: 'Update posts on the portfolio site', column: 0},
  { id: defaultId, title: 'Watch the movie Thunderbolts*', column: 1},
  { id: defaultId, title: 'Book the car rental reservation', column: 2},
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const addTask = () => {
    const trimmed = newTaskTitle.trim();
    if (!trimmed) return;

    const newTask: Task = {
      id: Date.now(), // simple unique ID
      title: trimmed,
      column: 0, // "To Do" column
    };
    console.log(newTask.id)

    setTasks(prev => [...prev, newTask]);
    setNewTaskTitle('');
  };

  const moveTask = (taskId: number, direction: -1 | 1) => {
    setTasks(prevTasks =>
      // Only update the target task
      prevTasks.map(task =>
        task.id === taskId ? {
          ...task,
          column: task.column + direction
        } : task
      )
    );
  };

  return (
    <div className="kanban-board">
      <h1 className='kanban-title'>Kanban Board</h1>

      <div className="task-input">
        <input
          type="text"
          value={newTaskTitle}
          onChange={e => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
  
      <div className='kanban-canvas'>
        {columns.map((title, index) => (
          <KanbanColumn
            key={index}
            title={title}
            colIdx={index}
            maxColumn={columns.length - 1}
            tasks={tasks.filter(task => task.column === index)}
            onMove={moveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
