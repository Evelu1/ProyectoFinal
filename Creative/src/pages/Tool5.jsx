// eslint-disable-next-line no-unused-vars
import React from 'react';

function Tool5() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center py-10 px-4">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full md:w-2/3 mb-10">
        {/* Contenedor de título y enlace con margen superior y a la izquierda */}
        <div className="flex flex-col items-center md:w-1/2 mb-4 md:mb-0 mt-36 ml-7">
          {/* Logo de Microsoft Designer */}
          <img 
            src="/img/MDesigner.png" // Ruta del logo de Microsoft Designer
            alt="Microsoft Designer Logo"
            className="w-32 h-auto mb-4" // Ajusta el tamaño según sea necesario
          />
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white text-center">Microsoft Designer</h1>
          {/* Botón estilizado para el enlace */}
          <a
            href="https://designer.microsoft.com/" // Enlace a la página oficial
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-700 dark:hover:bg-gray-100 transition duration-300"
          >
            Visita la página oficial de Microsoft Designer
          </a>
        </div>

        {/* Tarjeta de información - movida más hacia el centro */}
        <div className="md:w-1/2 md:ml-8 mt-20">
          <div className="h-[480px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">¿Qué es Microsoft Designer?</h2>
            <p className="text-lg text-black dark:text-white text-justify">
              Microsoft Designer es una herramienta avanzada de diseño gráfico impulsada por IA que ayuda a los usuarios a crear gráficos, presentaciones y contenido visual atractivo sin necesidad de ser un experto en diseño.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">¿Cómo utilizarla?</h3>
            <p className="text-black dark:text-white text-justify">
              Utilizar Microsoft Designer es muy sencillo: selecciona una plantilla, personalízala con tus imágenes, texto o gráficos, y deja que la inteligencia artificial te sugiera mejoras o cree nuevos diseños automáticamente.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjetas de imágenes */}
      <div className="flex flex-wrap justify-center md:w-2/3 mb-10">
        {/* Tarjeta D1 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/MSD1.jpeg" // Ruta de la imagen D1
            alt="Imagen D1"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Tarjeta D2 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/MSD2.jpeg" // Ruta de la imagen D2
            alt="Imagen D2"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Tarjeta D3 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/MSD3.jpeg" // Ruta de la imagen D3
            alt="Imagen D3"
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
            <li>Crear un logotipo para una empresa de tecnología.</li>
            <li>Diseñar un banner promocional para una oferta de verano.</li>
            <li>Generar una tarjeta de presentación minimalista.</li>
            <li>Crear una presentación para una conferencia de innovación.</li>
            <li>Diseñar un flyer para un evento musical.</li>
            <li>Crear un post para redes sociales anunciando un nuevo producto.</li>
            <li>Generar una imagen de portada para un blog de viajes.</li>
            <li>Crear un gráfico informativo para un reporte financiero.</li>
          </ul>
        </div>
      </div>

      {/* Contenedores de imágenes P1 y P2 debajo de "PROMPTS" */}
      <div className="flex flex-col justify-between w-full md:w-2/3 mt-10">
        {/* Contenedor P1 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-8"> {/* Aumenta el espacio entre P1 y P2 */}
          <img 
            src="/img/PMSD1.png" // Ruta de la imagen P1 relacionada con Microsoft Designer
            alt="Imagen P1"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>

        {/* Contenedor P2 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/PMSD2.png" // Ruta de la imagen P2 relacionada con Microsoft Designer
            alt="Imagen P2"
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-bold text-black dark:text-white text-center"></h3>
        </div>
      </div>
    </div>
  );
}

export default Tool5;

