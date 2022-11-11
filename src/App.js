import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/index";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
