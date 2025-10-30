import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import DashboardPage from "./Pages/DashboardPage"
import TaskDetails from "./Pages/TaskDetailsPage"
import LoginPage from "./Pages/LoginPage";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import EditTask from "./Pages/EditTaskPage";
import Navbar from "./components/NavBar";
import AddTaskPage from "./Pages/AddTaskPage";



const App: React.FC = () => {

  const { isLoading } = useAuth0();

    if (isLoading) { return <div className="text-center mt-5">Loading...</div>;}


  return (
    
      <Router>
  <div className="App">
  <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />}/>
          <Route path="/dashboard/add" element={<AddTaskPage />} />
          <Route path="/dashboard/:id" element={<TaskDetails />} />
          <Route path="/dashboard/:id/edit" element={<EditTask />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        </div>
      </Router>

  )
}

export default App
