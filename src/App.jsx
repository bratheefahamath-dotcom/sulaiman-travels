import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Contact from "./Components/Contact";

// REMOVED: import Navbar ...

function App() {
  return (
    <Router>
      <div className="antialiased">
        {/* REMOVED: <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
