import React, { useState,type FormEvent } from "react";
import { useAppContext } from "../hooks/useAppContext" 
import { useNavigate } from "react-router-dom";

const AddTaskForm: React.FC = () => {
    const { addTask } = useAppContext();
    const navigate = useNavigate();
    const [title, setTitle ] = useState<string>("");
    const [description, setDescription ] = useState<string>("");


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title.trim()) return; 
        addTask(title.trim(), description.trim() || undefined); 
        setTitle("");
        setDescription("");
    };


    return (
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-control mb-2"
        />
        <textarea
          placeholder="Description(optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control mt-2"
          rows={3}
        />
        <div className="d-flex gap-2 mt-4">
            <button
            type="submit"
            className="btn btn-primary"
            onClick={() => navigate("/dashboard")}
            >
            Add Task
            </button>
            <button
            className="btn btn-primary"
            onClick={() => navigate("/dashboard")}
            >
                Back to Dashboard
            </button>
        </div>
      </form>
    );
}


export default AddTaskForm;