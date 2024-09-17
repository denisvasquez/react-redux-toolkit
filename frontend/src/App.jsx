import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// containers
import Layout from "./containers/Layout";

// pages
import Home from "./pages/Home";
import TasksView from "./pages/tasks/TasksView";
import CreateTask from "./pages/tasks/CreateTask";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks" element={<TasksView />} />
                    <Route path="/tasks/new" element={<CreateTask />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
