import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import type { Task } from "../Types/Task";

const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, updateTask } = useAppContext();
  const navigate = useNavigate();

  const existingTask = tasks.find((t) => t.id === id);

  const [formData, setFormData] = useState<Task | null>(existingTask || null);

  if (!formData) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          Task not found. It may have been deleted.
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === " checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    updateTask(formData.id, formData);
    navigate(`/dashboard/${formData.id}`);
  };

  return (
    <div className="container mt-5 bg-light p-5 rounded">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4">Edit Task</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                rows={4}
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Due Date</label>
              <input
                type="date"
                name="dueDate"
                className="form-control"
                value={formData.dueDate ? formData.dueDate.split("T")[0] : ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="completed"
                checked={formData.completed}
                onChange={handleChange}
                id="completedCheck"
              />

              <label className="form-check-label" htmlFor="completedCheck">
                Completed
              </label>
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate(`/dashboard/${formData.id}`)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
