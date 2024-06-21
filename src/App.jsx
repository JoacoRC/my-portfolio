import React from 'react';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Portafolio de Joaquín E. Rodríguez</h1>
        <nav>
          <ul>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#education">Formación</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <About />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <footer>
        <p>&copy; 2024 Joaquín E. Rodríguez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
