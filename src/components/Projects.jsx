import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="project">
        <h3>Proyecto: Tic Tac Toe</h3>
        <p>Un simple juego de Tic Tac Toe desarrollado en Python.</p>
        <a href="https://github.com/JoacoRC/tic-tac-toe">Ver código</a>
      </div>
      <div className="project">
        <h3>Proyecto: Portfolio</h3>
        <p>Este es el portafolio personal que estás viendo ahora mismo, creado con HTML y CSS.</p>
        <a href="https://github.com/JoacoRC/portfolio">Ver código</a>
      </div>
      {/* Añade más proyectos aquí */}
    </section>
  );
}

export default Projects;
