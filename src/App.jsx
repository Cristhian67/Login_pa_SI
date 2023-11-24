
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Profile from "./components/Profile";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Verification from "./components/Verification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Navigate to="/login"/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/login" index element={<Login/>} />
        <Route path = "/verification" element = {<Verification/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
