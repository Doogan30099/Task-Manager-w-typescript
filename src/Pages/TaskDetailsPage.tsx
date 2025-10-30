import React from "react" 
import { useParams, useNavigate } from "react-router-dom"
import { useAppContext } from "../hooks/useAppContext"
import type { Task } from "../Types/Task"



const TaskDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { tasks } = useAppContext();
    const navigate = useNavigate();


    const task: Task | undefined = tasks.find((t) => t.id === id);

    if (!task) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger">
                    Task not found. It may have been deleted.
                </div>
                
                <button className="btn btn-secondary" onClick={() => navigate("/dashboard")}>
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5 bg-light p-4 rounded">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title">{task.title}</h3>
                    <p className="card-text">{task.description}</p>
                    <p>
                        <strong>Status:</strong>{" "}
                        <span className={`badge bg-${task.completed ? "success" : "warning"}`}>
                            {task.completed ? "completed" : "pending"}
                        </span>
                    </p>
                    {task.dueDate && (
                        <p>
                            <strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}
                        </p>
                    )}

                    <div className="d-flex gap-2 mt-4">
                        <button className="btn btn-primary" onClick={() => navigate(`/dashboard/${task.id}/edit`)}>
                            Edit Task
                        </button> 
                        <button className="btn btn-primary" onClick={() => navigate("/dashboard")}>
                            Back to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails