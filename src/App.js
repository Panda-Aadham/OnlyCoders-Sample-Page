import React from 'react';
import Home from './pages/Home/Home.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Home />
      <Router>
        <Routes>
          <Route path="/home" component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
