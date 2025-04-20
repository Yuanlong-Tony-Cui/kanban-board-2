import './TaskCard.css';

type Task = {
  id: number;
  title: string;
  column: number;
};

type Props = {
  task: Task;
  onMove: (id: number, direction: -1 | 1) => void;
  maxColumn: number;
};

export default function TaskCard({ task, onMove, maxColumn }: Props) {
  return (
    <div className="task-card">
      <div className="task-content">
        {task.title}
      </div>
      <div className="task-actions">
        {task.column > 0 && (
          <button className="move-button" onClick={() => onMove(task.id, -1)}>
            ◀
          </button>
        )}
        {task.column < maxColumn && (
          <button className="move-button" onClick={() => onMove(task.id, 1)}>
            ▶
          </button>
        )}
      </div>
    </div>
  );
}
