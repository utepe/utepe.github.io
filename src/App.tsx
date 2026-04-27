import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./routes/Home/Home";
import Resume from "./routes/Resume/Resume";
import Projects from "./routes/Projects/Projects";
import Contact from "./routes/Contact/Contact";
import Project from "./routes/Project/Project";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:titleId" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
