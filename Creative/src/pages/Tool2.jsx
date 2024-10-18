// eslint-disable-next-line no-unused-vars
import React from 'react';

function Tool2() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center py-10 px-4">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full md:w-2/3 mb-10">
        {/* Contenedor de título y enlace con margen superior y a la izquierda */}
        <div className="flex flex-col items-center md:w-1/2 mb-4 md:mb-0 mt-36 ml-7">
          {/* Logo de Canva */}
          <img 
            src="/img/Canva.png" // Ruta del logo de Canva
            alt="Canva Logo"
            className="w-32 h-auto mb-4" // Ajusta el tamaño según sea necesario
          />
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white text-center">Canva</h1>
          {/* Botón estilizado para el enlace */}
          <a
            href="https://www.canva.com/" // Enlace a la página oficial
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-700 dark:hover:bg-gray-100 transition duration-300"
          >
            Visita la página oficial de Canva
          </a>
        </div>

        {/* Tarjeta de información - movida más hacia el centro */}
        <div className="md:w-1/2 md:ml-8 mt-20">
          <div className="h-[480px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">¿Qué es Canva?</h2>
            <p className="text-lg text-black dark:text-white text-justify">
              Canva es una plataforma de diseño gráfico que permite a los usuarios crear contenido visual de manera fácil y accesible. 
              Con una amplia variedad de plantillas y herramientas de edición, Canva facilita la creación de presentaciones, gráficos y otros elementos visuales para cualquier necesidad.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">¿Cómo utilizarla?</h3>
            <p className="text-black dark:text-white text-justify">
              Para utilizar Canva, los usuarios pueden acceder a su interfaz en línea, donde pueden elegir plantillas, arrastrar y soltar elementos, y personalizar su diseño de acuerdo a sus preferencias. 
              La herramienta está diseñada para ser intuitiva, lo que la convierte en una opción ideal tanto para diseñadores novatos como experimentados.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjetas de imágenes */}
      <div className="flex flex-wrap justify-center md:w-2/3 mb-10">
        {/* Tarjeta F1 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/C1.png" // Ruta de la imagen F1 relacionada con Canva
            alt="Imagen Canva F1"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Tarjeta F2 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/C2.png" // Ruta de la imagen F2 relacionada con Canva
            alt="Imagen Canva F2"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Tarjeta F3 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/C3.png" // Ruta de la imagen F3 relacionada con Canva
            alt="Imagen Canva F3"
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
            <li>Crear un diseño para una presentación de negocios.</li>
            <li>Diseñar un gráfico para redes sociales.</li>
            <li>Crear una invitación para un evento especial.</li>
            <li>Desarrollar una infografía educativa.</li>
            <li>Diseñar una portada de libro atractiva.</li>
            <li>Crear una serie de posts para Instagram.</li>
            <li>Diseñar un menú para un restaurante.</li>
            <li>Crear un cartel publicitario.</li>
          </ul>
        </div>
      </div>

      {/* Contenedores de imágenes P1 y P2 debajo de "PROMPTS" */}
      <div className="flex flex-col justify-between w-full md:w-2/3 mt-10"> {/* Reducción de márgenes */}
        {/* Contenedor P1 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-8"> {/* Aumenta el espacio entre P1 y P2 */}
          <img 
            src="/img/PC1.png" // Ruta de la imagen P1 relacionada con Canva
            alt="Imagen Canva P1"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Contenedor P2 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/PC2.png" // Ruta de la imagen P2 relacionada con Canva
            alt="Imagen Canva P2"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>
      </div>
    </div>
  );
}

export default Tool2;


