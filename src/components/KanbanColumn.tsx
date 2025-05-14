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
  colIdx: number;
  maxColumn: number;
  onMove: (id: number, direction: -1 | 1) => void;
};

export default function KanbanColumn({
  title,
  tasks,
  colIdx,
  maxColumn,
  onMove,
}: Props) {
  // console.log(`Column ${colIdx}: ${title}`);
  return (
    <div className="kanban-column">
      <h1 className='column-title'>{title}</h1>
      <div className='task-section'>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onMove={onMove}
            maxColumn={maxColumn}
          />
        ))}
      </div>
    </div>
  );
}
