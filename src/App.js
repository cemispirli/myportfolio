import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarx from './components/Navbar';
import Home from './pages/Home';
import MyCv from './pages/MyCv';
import Certificates from './pages/Certificates';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollButton from './components/ScrollButton';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbarx/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/MyCv" element={<MyCv />} />
        <Route path="Certificates" element={<Certificates />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <ScrollButton/>
      </BrowserRouter>
    </div>
  );
}

export default App;
