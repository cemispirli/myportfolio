import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarx from './components/Navbar';
import Home from './pages/Home';
// import Resume from './pages/Resume';
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
        {/* <Route path="resume" element={<Resume />} /> */}
        <Route path="aboutme" element={<AboutMe/>} />
        <Route path="Projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <ScrollButton/>
      </BrowserRouter>
    </div>
  );
}

export default App;
