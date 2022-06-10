import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './ScrollToTop';
import Home from './components/pages/Home';
import Materias from './components/pages/Materias';
import NotFound from './components/pages/404';
import MainNavbar from './components/Navbar';
import Contato from './components/pages/Contato';
import Programas from './components/pages/Programas';
import Trintaminutos from './components/pages/Programas/Trintaminutos';
import GuyBoaventura from './components/pages/Programas/GuyBoaventura';
import NtvNews from './components/pages/Programas/NtvNews';
import MaisSaude from './components/pages/Programas/MaisSaude';
import EspacoFeminino from './components/pages/Programas/EspacoFeminino';
import ButecoNossa from './components/pages/Programas/ButecoNossa';

function App() {
  return (
    <Router>
      <MainNavbar />
      <ScrollToTop>
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
          <Route exact path="/programas/ntvnews" element={<NtvNews />} />
          <Route exact path="/programas/maissaude" element={<MaisSaude />} />
          <Route
            exact
            path="/programas/espacofeminino"
            element={<EspacoFeminino />}
          />
          <Route
            exact
            path="/programas/butecodanossa"
            element={<ButecoNossa />}
          />
          <Route exact path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
