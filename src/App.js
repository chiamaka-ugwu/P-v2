import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <>
      <Router>
          <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/" element={<ProjectPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
