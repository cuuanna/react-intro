import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/projects.jsx";
import Navbar from "./Components/navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;