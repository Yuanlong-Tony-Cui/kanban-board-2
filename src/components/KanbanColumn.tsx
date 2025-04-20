import TaskCard from './TaskCard';
import './KanbanColumn.css';

type Task = {
  id: number;
  title: string;
  column: number;
};

type Props = {
  title: string;
  tasks: Task[];
  columnIndex: number;
  maxColumn: number;
  onMove: (id: number, direction: -1 | 1) => void;
};

export default function KanbanColumn({
  title,
  tasks,
  columnIndex,
  maxColumn,
  onMove,
}: Props) {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onMove={onMove}
          maxColumn={maxColumn}
        />
      ))}
    </div>
  );
}
