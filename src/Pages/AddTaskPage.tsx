import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import AddTaskForm from "../components/AddTaskForm";

const AddTaskPage: React.FC = () => {
  const { isLoading } = useAuth0();

  


  if (isLoading) {
    return (
      <div style={{ padding: "2rem" }}>
        <p>Checking authentication…</p>
      </div>
    );
  }
  return (
    <div className="container py-4">
      <h2 className="fs-2 fw-bold mb-4">What can Jeeves do for you?</h2>
      <p>Add a new task and give a small description on any specifics you would like to include!</p>
      <AddTaskForm />
    </div>
  );
};

export default AddTaskPage;
