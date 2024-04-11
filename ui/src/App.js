import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="*" element={ <NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export { App };
