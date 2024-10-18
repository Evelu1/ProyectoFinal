// eslint-disable-next-line no-unused-vars
import React from 'react';

function Tool4() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center py-10 px-4">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full md:w-2/3 mb-10">
        {/* Contenedor de título y enlace con margen superior y a la izquierda */}
        <div className="flex flex-col items-center md:w-1/2 mb-4 md:mb-0 mt-36 ml-7">
          {/* Logo de ChatGPT */}
          <img 
            src="/img/Chat.png" // Ruta del logo de ChatGPT
            alt="ChatGPT Logo"
            className="w-32 h-auto mb-4" // Ajusta el tamaño según sea necesario
          />
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white text-center">ChatGPT</h1>
          {/* Botón estilizado para el enlace */}
          <a
            href="https://www.openai.com/chatgpt" // Enlace a la página oficial de ChatGPT
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-700 dark:hover:bg-gray-100 transition duration-300"
          >
            Visita la página oficial de ChatGPT
          </a>
        </div>

        {/* Tarjeta de información - movida más hacia el centro */}
        <div className="md:w-1/2 md:ml-8 mt-20">
          <div className="h-[480px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">¿Qué es ChatGPT?</h2>
            <p className="text-lg text-black dark:text-white text-justify">
              ChatGPT es un modelo de lenguaje avanzado desarrollado por OpenAI que utiliza inteligencia artificial para generar texto similar al humano.
              Su tecnología permite mantener conversaciones, responder preguntas y asistir en diversas tareas utilizando texto generado automáticamente.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">¿Cómo utilizarlo?</h3>
            <p className="text-black dark:text-white text-justify">
              Para utilizar ChatGPT, interactúa a través de una interfaz de chat, donde puedes escribir una pregunta o comentario, 
              y ChatGPT generará una respuesta utilizando los patrones que ha aprendido.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjetas de imágenes */}
      <div className="flex flex-wrap justify-center md:w-2/3 mb-10">
        {/* Tarjeta F1 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/CGPT1.png" // Ruta de la imagen F1 relacionada con ChatGPT
            alt="Imagen ChatGPT F1"
            className="w-full h-auto mb-2 rounded-lg"
          />
        </div>

        {/* Tarjeta F2 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/CGPT2.png" // Ruta de la imagen F2 relacionada con ChatGPT
            alt="Imagen ChatGPT F2"
            className="w-full h-auto mb-2 rounded-lg"
          />
        </div>

        {/* Tarjeta F3 */}
        <div className="h-[350px] w-full md:w-1/3 rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/CGPT3.png" // Ruta de la imagen F3 relacionada con ChatGPT
            alt="Imagen ChatGPT F3"
            className="w-full h-auto mb-2 rounded-lg"
          />
        </div>
      </div>

      {/* Contenedor de Prompts */}
      <div className="flex flex-col w-full md:w-2/3 mb-4 mt-4"> {/* Ajuste del layout */}
        {/* Contenedor de Título "PROMPTS" */}
        <div className="flex flex-col items-start w-full">
          <h2 className="text-3xl font-bold text-black dark:text-white text-left mb-2">Ejemplos de Prompts</h2> {/* Ajuste en márgenes */}
        </div>
        
        {/* Contenedor de ejemplos de Prompts */}
        <div className="bg-transparent dark:bg-black rounded-lg p-4 shadow-none w-full">
          <ul className="list-disc ml-5 text-black dark:text-white">
            <li>Crear una historia sobre un mundo futurista gobernado por inteligencia artificial.</li>
            <li>Escribir una receta creativa con ingredientes sorprendentes.</li>
            <li>Desarrollar un plan de estudio para aprender un nuevo idioma en 6 meses.</li>
            <li>Generar una descripción detallada de un personaje para un libro de fantasía.</li>
            <li>Redactar un correo profesional para proponer una colaboración con una empresa.</li>
            <li>Escribir un resumen de las últimas noticias sobre tecnología y avances científicos.</li>
            <li>Crear un poema inspirador sobre la superación personal.</li>
            <li>Describir una ciudad imaginaria en un planeta distante.</li>
          </ul>
        </div>
      </div>

      {/* Contenedores de imágenes P1 y P2 debajo de "PROMPTS" */}
      <div className="flex flex-col justify-between w-full md:w-2/3 mt-10"> {/* Ajuste de layout */}
        {/* Contenedor P1 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-8"> {/* Aumenta el espacio entre P1 y P2 */}
          <img 
            src="/img/PCHAT1.png" // Ruta de la imagen P1 relacionada con ChatGPT
            alt="Imagen ChatGPT P1"
            className="w-full h-auto mb-2 rounded-lg"
          />
        </div>

        {/* Contenedor P2 */}
        <div className="h-[350px] w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col items-center justify-center p-4 mb-4">
          <img 
            src="/img/PCHAT2.png" // Ruta de la imagen P2 relacionada con ChatGPT
            alt="Imagen ChatGPT P2"
            className="w-full h-auto mb-2 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Tool4;
