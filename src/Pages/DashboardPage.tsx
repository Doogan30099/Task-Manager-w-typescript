
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";



const DashboardPage: React.FC = () => {


  const {  isLoading } = useAuth0();
   const navigate = useNavigate();
  

  if (isLoading) {
    return (
      <div style={{ padding: "2rem" }}>
        <p>Checking authentication…</p>
      </div>
    );
  }
  return (
    <>
    <div className="container py-4 bg-light rounded">
      <h2 className="fs-2 fw-bold mb-4">Task Dashboard</h2>
      <p>All tasks are displayed below. Please click Add Task to add to the list.</p>
      <button
        className="btn btn-primary"
        onClick={() => navigate(`/dashboard/add`)}
      >
        Add Task
      </button>
      {/* <AddTaskForm /> */}
      <TaskList />
      
    </div>
    </>
  );
}

export default DashboardPage;
