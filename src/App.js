import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import Materias from './components/pages/Materias';
import NotFound from './components/pages/404';
import MainNavbar from './components/Navbar';
import Contact from './components/Contact';
import Programas from './components/pages/Programas';
import Trintaminutos from './components/pages/Programas/Trintaminutos';
import GuyBoaventura from './components/pages/Programas/GuyBoaventura';

function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/programas" element={<Programas />} />
        <Route
          exact
          path="/programas/trintaminutos"
          element={<Trintaminutos />}
        />
        <Route
          exact
          path="/programas/guyboaventura"
          element={<GuyBoaventura />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;
