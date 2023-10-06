import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./routes/Home/Home";
import Resume from "./routes/Resume/Resume";
import Projects from "./routes/Projects/Projects";
import Contact from "./routes/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Route>
    </Routes>
  );
}

export default App;
