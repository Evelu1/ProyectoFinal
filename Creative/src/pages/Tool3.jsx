// eslint-disable-next-line no-unused-vars
import React from 'react';

function Tool3() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center py-10 px-4">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full md:w-2/3 mb-10">
        {/* Contenedor de título y enlace con margen superior y a la izquierda */}
        <div className="flex flex-col items-center md:w-1/2 mb-4 md:mb-0 mt-36 ml-7">
          {/* Logo de Leonardo.AI */}
          <img 
            src="/img/Leonardo.png" // Ruta del logo de Leonardo.AI
            alt="Leonardo.AI Logo"
            className="w-32 h-auto mb-4"
          />
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white text-center">Leonardo.AI</h1>
          {/* Botón estilizado para el enlace */}
          <a
            href="https://www.leonardo.ai/" // Enlace a la página oficial de Leonardo.AI
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-700 dark:hover:bg-gray-100 transition duration-300"
          >
            Visita la página oficial de Leonardo.AI
          </a>
        </div>

        {/* Tarjeta de información */}
        <div className="md:w-1/2 md:ml-8 mt-20">
          <div className="h-[480px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">¿Qué es Leonardo.AI?</h2>
            <p className="text-lg text-black dark:text-white text-justify">
              Leonardo.AI es una herramienta avanzada de inteligencia artificial que permite a los usuarios crear y editar imágenes utilizando descripciones textuales. Su tecnología de aprendizaje automático permite generar visualizaciones únicas y personalizadas de manera rápida y fácil.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">¿Cómo utilizarla?</h3>
            <p className="text-black dark:text-white text-justify">
              Para utilizar Leonardo.AI, los usuarios deben ingresar una descripción de la imagen que desean crear en la plataforma. La herramienta generará varias opciones basadas en la entrada del usuario, permitiendo además ajustes y personalizaciones.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjetas de imágenes */}
      <div className="flex flex-wrap justify-center md:w-2/3 mb-10">
        {/* Tarjeta F1 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/L1.jpg" // Ruta de la imagen F1 relacionada con Leonardo.AI
            alt="Imagen Leonardo.AI F1"
            className="w-full h-auto mb-2 rounded-lg"
          />
        </div>

        {/* Tarjeta F2 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/L2.jpg" // Ruta de la imagen F2 relacionada con Leonardo.AI
            alt="Imagen Leonardo.AI F2"
            className="w-full h-auto mb-2 rounded-lg"
          />
        </div>

        {/* Tarjeta F3 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/L3.jpg" // Ruta de la imagen F3 relacionada con Leonardo.AI
            alt="Imagen Leonardo.AI F3"
            className="w-full h-auto mb-2 rounded-lg"
          />
        </div>
      </div>

      {/* Contenedor de Prompts */}
      <div className="flex flex-col w-full md:w-2/3 mb-4 mt-4">
        <div className="flex flex-col items-start w-full">
          <h2 className="text-2xl font-bold text-black dark:text-white text-left mb-4">PROMPTS</h2>
        </div>
        
        {/* Contenedor de ejemplos de Prompts */}
        <div className="bg-transparent dark:bg-black rounded-lg p-4 shadow-none w-full">
          <ul className="list-disc ml-5 text-black dark:text-white">
            <li>Crear una ilustración de un paisaje futurista.</li>
            <li>Generar un retrato de un personaje de fantasía.</li>
            <li>Diseñar un arte abstracto basado en emociones.</li>
            <li>Crear una imagen de un animal mitológico.</li>
            <li>Desarrollar un concepto visual para un videojuego.</li>
          </ul>
        </div>
      </div>

      {/* Contenedores de imágenes P1 y P2 debajo de "PROMPTS" */}
      <div className="flex flex-col justify-between w-full md:w-2/3 mt-10">
        {/* Contenedor P1 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-8">
          <img 
            src="/img/PLF1.png" // Ruta de la imagen P1 relacionada con Leonardo.AI
            alt="Imagen Leonardo.AI P1"
            className="w-full h-auto mb-2 rounded-lg"
          />
        </div>

        {/* Contenedor P2 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/PLF2.png" // Ruta de la imagen P2 relacionada con Leonardo.AI
            alt="Imagen Leonardo.AI P2"
            className="w-full h-auto mb-2 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Tool3;

