// eslint-disable-next-line no-unused-vars
import React from 'react';

function Tool6() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center py-10 px-4">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full md:w-2/3 mb-10">
        {/* Contenedor de título y enlace con margen superior y a la izquierda */}
        <div className="flex flex-col items-center md:w-1/2 mb-4 md:mb-0 mt-36 ml-7">
          {/* Logo de Bing Image Creator */}
          <img 
            src="/img/bing.png" // Ruta del logo de Bing Image Creator
            alt="Bing Image Creator Logo"
            className="w-32 h-auto mb-4"
          />
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white text-center">Bing Image Creator</h1>
          {/* Botón estilizado para el enlace */}
          <a
            href="https://www.bing.com/create" // Enlace a la página oficial de Bing Image Creator
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white dark:bg-white dark:text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
          >
            Visita la página oficial de Bing Image Creator
          </a>
        </div>

        {/* Tarjeta de información */}
        <div className="md:w-1/2 md:ml-8 mt-20">
          <div className="h-[480px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">¿Qué es Bing Image Creator?</h2>
            <p className="text-lg text-black dark:text-white text-justify">
              Bing Image Creator es una herramienta impulsada por inteligencia artificial que permite a los usuarios generar imágenes a partir de descripciones textuales. Utiliza la tecnología DALL·E de OpenAI para transformar palabras en imágenes detalladas, permitiendo a los usuarios visualizar ideas de manera rápida y eficiente.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">¿Cómo utilizarlo?</h3>
            <p className="text-black dark:text-white text-justify">
              Para utilizar Bing Image Creator, los usuarios deben acceder a la plataforma y describir la imagen que desean generar escribiendo un prompt. La IA procesará la solicitud y generará una imagen basada en esa descripción. La herramienta es accesible y gratuita para todos los usuarios de Bing.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjetas de imágenes */}
      <div className="flex flex-wrap justify-center md:w-2/3 mb-10">
        {/* Tarjeta F1 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/B1.jpg" // Ruta de la imagen F1 generada por Bing Image Creator
            alt="Imagen Bing IA F1"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Tarjeta F2 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/B2.jpg" // Ruta de la imagen F2 generada por Bing Image Creator
            alt="Imagen Bing IA F2"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Tarjeta F3 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/B3.jpg" // Ruta de la imagen F3 generada por Bing Image Creator
            alt="Imagen Bing IA F3"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>
      </div>

      {/* Contenedor de Prompts */}
      <div className="flex flex-col w-full md:w-2/3 mb-4 mt-4">
        {/* Contenedor de Título "PROMPTS" */}
        <div className="flex flex-col items-start w-full">
          <h2 className="text-3xl font-bold text-black dark:text-white text-left mb-2">Ejemplos de Prompts</h2>
        </div>
        
        {/* Contenedor de ejemplos de Prompts */}
        <div className="bg-transparent dark:bg-black rounded-lg p-4 shadow-none w-full">
          <ul className="list-disc ml-5 text-black dark:text-white">
            <li>Genera una ilustración de un castillo flotante sobre nubes iluminadas por la luna.</li>
            <li>Crea una imagen de un robot caminando por una ciudad futurista al amanecer.</li>
            <li>Diseña una escena de una playa tropical con palmeras y agua cristalina.</li>
            <li>Crea un retrato de un dragón envuelto en llamas, volando por un paisaje volcánico.</li>
            <li>Genera una imagen de una nave espacial despegando desde una plataforma futurista en el espacio.</li>
          </ul>
        </div>
      </div>

      {/* Contenedores de imágenes P1 y P2 debajo de "PROMPTS" */}
      <div className="flex flex-col justify-between w-full md:w-2/3 mt-10">
        {/* Contenedor P1 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-8">
          <img 
            src="/img/PB1.png" // Ruta de la imagen P1 generada por Bing Image Creator
            alt="Imagen Bing IA P1"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Contenedor P2 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/PB2.png" // Ruta de la imagen P2 generada por Bing Image Creator
            alt="Imagen Bing IA P2"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>
      </div>
    </div>
  );
}

export default Tool6;
