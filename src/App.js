import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Games from './pages/Games';
import GearItem from './pages/GearItem';
import News from './pages/News';
import Gear from './pages/Gear';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path = '/about' element={<About/>} />
        <Route path = '/contact' element={<Contact/>} />
        <Route path = '/games' element={<Games/>} />
        <Route path = '/gear/*' element={<Gear />} />
        <Route path = '/gear/:id' element={<GearItem />} />
        <Route path = '/news' element={<News />} />
      </Routes>
    </Router>
  )
}

export default App;