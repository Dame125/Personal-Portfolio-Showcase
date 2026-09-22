import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Ги импортираш страниците од папката pages
import Home from './pages/home.jsx';
import Proekt1 from './pages/proekt1.jsx';
import Proekt2 from './pages/proekt2.jsx';
import Proekt3 from './pages/proekt3.jsx';
import Proekt4 from './pages/proekt4.jsx';
import Proekt5 from './pages/proekt5.jsx';
import Proekt6 from './pages/proekt6.jsx';
import Proekt7 from './pages/proekt7.jsx';
import Proekt8 from './pages/proekt8.jsx';


function App() {
  return (
    <Routes>
      {/* Почетната страница со сите секции (Hero, About, Skills, Projects) */}
      <Route path="/" element={<Home />} />

      {/* Посебната страница за првиот проект */}
      <Route path="/proekt1" element={<Proekt1 />} />
      <Route path="/proekt2" element={<Proekt2 />} />
      <Route path="/proekt3" element={<Proekt3 />} />
      <Route path="/proekt4" element={<Proekt4 />} />
      <Route path="/proekt5" element={<Proekt5 />} />
      <Route path="/proekt6" element={<Proekt6 />} />
      <Route path="/proekt7" element={<Proekt7 />} />
      <Route path="/proekt8" element={<Proekt8 />} />
      
    </Routes>
  );
}

export default App;