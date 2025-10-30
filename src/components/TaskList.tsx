import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Link } from "react-router-dom";

const TaskList: React.FC = () => {
    const { tasks, toggleTask, deleteTask } = useAppContext();


    if(tasks.length === 0 ) {
        return <p className="text-muted mt-4">No tasks yet. Add one above!</p>
    }

    return (
        <ul className="list-unstyled d-flex flex-column gap-2 mt-4 border p-3 rounded">
            {tasks.map((task) => (
                <li
                  key={task.id}
                  className="d-flex align-items-center justify-content-between border p-2 rounded shadow-sm"
                  >
                    <div className="d-flex align-items-center gap-2">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            className="form-check-input me-2"
                        />
                        <span
                            className={`${task.completed ? "text-decoration-line-through text-muted" : ""
                            }`}>
                                <Link to={`/dashboard/${task.id}`} className="text-decoration-none">
                                    {task.title}
                                </Link>
                            </span>
                    </div>

                    <button onClick={() => deleteTask(task.id)} className="btn btn-sm btn-outline-danger">
                        X
                    </button>
                  </li>
            ))}
        </ul>
    );
};

export default TaskList