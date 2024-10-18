// eslint-disable-next-line no-unused-vars
import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4"> {/* Ajuste aquí */}
      
      {/* Imagen del logo con fondo negro para el modo oscuro */}
      <div className="w-48 h-48 mb-6 flex items-center justify-center bg-white dark:bg-black"> {/* Ajusta el fondo según el modo */}
        <img src="/img/creative.png" alt="Logo Creative" className="w-48 h-48" /> {/* Tamaño ajustado a 48x48 */}
      </div>

      <h1 className="text-4xl font-bold mb-6">ACERCA DE CREATIVE</h1>
      <p className="max-w-3xl text-lg text-justify px-4">
        En Creative, somos una comunidad apasionada por el diseño gráfico y las infinitas posibilidades que la inteligencia artificial aporta al mundo creativo. Nuestro objetivo es ofrecer a profesionales y entusiastas del diseño un espacio para aprender, explorar y dominar las herramientas de IA más avanzadas aplicadas al diseño.
      </p>
      <p className="max-w-3xl text-lg text-justify px-4 my-4">
        Creemos que el futuro del diseño reside en la convergencia entre la creatividad humana y las tecnologías emergentes. Por ello, proporcionamos recursos educativos, tutoriales y guías prácticas para que nuestros usuarios puedan mejorar sus habilidades, optimizar sus flujos de trabajo y mantenerse a la vanguardia en un sector en constante evolución.
      </p>
      <p className="max-w-3xl text-lg text-justify px-4">
        Ya sea que estés iniciándote en el diseño gráfico o seas un experto buscando llevar tus proyectos al siguiente nivel, en Creative encontrarás la inspiración y el conocimiento necesarios para potenciar tu creatividad con las herramientas más innovadoras del mercado.
      </p>
    </div>
  );
}

export default About;


