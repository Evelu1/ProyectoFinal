// eslint-disable-next-line no-unused-vars
import React from 'react';

function Tool1() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center py-10 px-4">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full md:w-2/3 mb-10">
        {/* Contenedor de título y enlace con margen superior y a la izquierda */}
        <div className="flex flex-col items-center md:w-1/2 mb-4 md:mb-0 mt-36 ml-7">
          {/* Logo de Adobe Firefly */}
          <img 
            src="/img/Adobe.png" // Ruta del logo de Adobe Firefly
            alt="Adobe Firefly Logo"
            className="w-32 h-auto mb-4" // Ajusta el tamaño según sea necesario
          />
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white text-center">Adobe Firefly</h1>
          {/* Botón estilizado para el enlace */}
          <a
            href="https://www.adobe.com/sensei/generative-ai/firefly.html" // Enlace a la página oficial
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-700 dark:hover:bg-gray-100 transition duration-300"
          >
            Visita la página oficial de Adobe Firefly
          </a>
        </div>

        {/* Tarjeta de información - movida más hacia el centro */}
        <div className="md:w-1/2 md:ml-8 mt-20">
          <div className="h-[480px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">¿Qué es Adobe Firefly?</h2>
            <p className="text-lg text-black dark:text-white text-justify">
              Adobe Firefly es una herramienta de inteligencia artificial diseñada para ayudar en la creación y edición de contenidos visuales. 
              Con Firefly, los usuarios pueden generar imágenes y gráficos de manera eficiente y creativa, utilizando tecnología avanzada que simplifica el proceso de diseño.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">¿Cómo utilizarla?</h3>
            <p className="text-black dark:text-white text-justify">
              Para utilizar Adobe Firefly, los usuarios pueden acceder a su interfaz en línea, donde pueden cargar imágenes, aplicar efectos y generar contenido visual basado en sus necesidades. 
              La herramienta está diseñada para ser intuitiva, permitiendo que tanto diseñadores como no diseñadores aprovechen su potencial.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjetas de imágenes */}
      <div className="flex flex-wrap justify-center md:w-2/3 mb-10">
        {/* Tarjeta F1 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/F1.jpg" // Ruta de la imagen F1
            alt="Imagen F1"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Tarjeta F2 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/F2.jpg" // Ruta de la imagen F2
            alt="Imagen F2"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Tarjeta F3 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/F3.jpg" // Ruta de la imagen F3
            alt="Imagen F3"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>
      </div>

      {/* Contenedor de Prompts */}
      <div className="flex flex-col w-full md:w-2/3 mb-4 mt-4"> {/* Se ajusta el margen superior */}
        {/* Contenedor de Título "PROMPTS" */}
        <div className="flex flex-col items-start w-full">
          <h2 className="text-3xl font-bold text-black dark:text-white text-left mb-2">Ejemplos de Prompts</h2> {/* Ajuste en márgenes */}
        </div>
        
        {/* Contenedor de ejemplos de Prompts */}
        <div className="bg-transparent dark:bg-black rounded-lg p-4 shadow-none w-full">
          <ul className="list-disc ml-5 text-black dark:text-white">
            <li>Crear un paisaje futurista al atardecer.</li>
            <li>Generar un retrato de un perro con gafas de sol.</li>
            <li>Diseñar un logotipo minimalista para una startup tecnológica.</li>
            <li>Ilustrar un jardín mágico lleno de flores luminosas.</li>
            <li>Crear un arte conceptual de una ciudad en el espacio.</li>
            <li>Diseñar una portada de libro para una novela de ciencia ficción.</li>
            <li>Generar una imagen de un castillo medieval en una colina.</li>
            <li>Crear una escena de un café en París con vista a la Torre Eiffel.</li>
          </ul>
        </div>
      </div>

      {/* Contenedores de imágenes P1 y P2 debajo de "PROMPTS" */}
      <div className="flex flex-col justify-between w-full md:w-2/3 mt-10"> {/* Reducción de márgenes */}
        {/* Contenedor P1 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-8"> {/* Aumenta el espacio entre P1 y P2 */}
          <img 
            src="/img/P1.png" // Ruta de la imagen P1
            alt="Imagen P1"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Contenedor P2 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/P2.png" // Ruta de la imagen P2
            alt="Imagen P2"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>
      </div>
    </div>
  );
}

export default Tool1;



