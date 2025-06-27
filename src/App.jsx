import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects.jsx';
import CrimsonPlate from './pages/CrimsonPlate';
import AlzCare from './pages/AlzCare';
import ListeningLab from './pages/ListeningLab';
import CultureCafe from './pages/CultureCafe';
import Guardian from './pages/Guardian.jsx';
import GoodReads from './pages/GoodReads.jsx';
import Accessability from './pages/Accessability.jsx';
import './App.css';

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#493B32'
        }}
        outerStyle={{
          border: '1px solid #493B32'
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/crimson-plate" element={<CrimsonPlate />} />
          <Route path="/projects/alzcare" element={<AlzCare />} />
          <Route path="/projects/listening-lab" element={<ListeningLab />} />
          <Route path="/projects/culture-cafe" element={<CultureCafe />} />
          <Route path="/projects/guardian" element={<Guardian />} />
          <Route path="/projects/goodreads" element={<GoodReads />} />
          <Route path="/projects/accessability" element={<Accessability />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
