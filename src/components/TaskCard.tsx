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
    const { id, column } = task;

    return (
        <div className="task-card">
            <div className="task-content">
                {task.title}
            </div>
            <div className="task-actions">
                <button
                    className="move-button"
                    disabled={column === 0}
                    onClick={() => onMove(id, -1)}
                >
                    { column > 0 ? "◀️" : "🚫" }
                </button>
                <button
                    className="move-button"
                    disabled={column === maxColumn}
                    onClick={() => onMove(id, 1)}
                >
                    { column < maxColumn ? "▶️" : "🚫" }
                </button>
            </div>
        </div>
    );
}
