// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function AIToolsPag() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white text-center">Bienvenido a IA Tools</h1>
      <p className="text-lg text-black dark:text-white text-center mb-12 px-4"></p>

      {/* Espacio adicional antes de las tarjetas */}
      <div className="mb-10" /> {/* Espacio añadido */}

      {/* Contenedor de las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

        {/* Primera Tarjeta - Adobe Firefly */}
        <Link to="/Tool1">
          <div className="h-[350px] w-[350px] rounded-lg shadow-lg bg-transparent dark:bg-transparent flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">Adobe Firefly</h2>
            <img 
              src="/img/Adobe.png" 
              alt="Adobe Firefly" 
              className="w-24 h-24 object-contain mb-4" 
            />
            <p className="text-lg text-black dark:text-white text-justify px-4">
              Crea contenidos visuales atractivos y creativos de manera rápida y eficiente, facilitando la expresión artística.
            </p>
          </div>
        </Link>

        {/* Segunda Tarjeta - Canva */}
        <Link to="/Tool2">
          <div className="h-[350px] w-[350px] rounded-lg shadow-lg bg-transparent dark:bg-transparent flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">Canva</h2>
            <img 
              src="/img/Canva.png" 
              alt="Canva" 
              className="w-24 h-24 object-contain mb-4" 
            />
            <p className="text-lg text-black dark:text-white text-justify px-4">
              Diseño gráfico accesible que permite crear visuales impresionantes de forma sencilla y colaborativa.
            </p>
          </div>
        </Link>

        {/* Tercera Tarjeta - Leonardo.AI */}
        <Link to="/Tool3">
          <div className="h-[350px] w-[350px] rounded-lg shadow-lg bg-transparent dark:bg-transparent flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">Leonardo.AI</h2>
            <img 
              src="/img/Leonardo.png" 
              alt="Leonardo.AI" 
              className="w-24 h-24 object-contain mb-4" 
            />
            <p className="text-lg text-black dark:text-white text-justify px-4">
              Genera y edita imágenes con precisión utilizando tecnologías avanzadas.
            </p>
          </div>
        </Link>

        {/* Cuarta Tarjeta - ChatGPT */}
        <Link to="/Tool4">
          <div className="h-[350px] w-[350px] rounded-lg shadow-lg bg-transparent dark:bg-transparent flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">ChatGPT</h2>
            <img 
              src="/img/Chat.png" 
              alt="ChatGPT" 
              className="w-24 h-24 object-contain mb-4 dark:hidden" 
            />
            <img 
              src="/img/Chat.png" 
              alt="ChatGPT" 
              className="w-24 h-24 object-contain mb-4 hidden dark:block" 
            />
            <p className="text-lg text-black dark:text-white text-justify px-4">
              Asiste en la creación de descripciones para generar imágenes, potenciando la creatividad y la visualización de ideas.
            </p>
          </div>   
        </Link>

        {/* Quinta Tarjeta - Microsoft Designer */}
        <Link to="/Tool5">
          <div className="h-[350px] w-[350px] rounded-lg shadow-lg bg-transparent dark:bg-transparent flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">Microsoft Designer</h2>
            <img 
              src="/img/MDesigner.png" 
              alt="Microsoft Designer" 
              className="w-24 h-24 object-contain mb-4" 
            />
            <p className="text-lg text-black dark:text-white text-justify px-4">
              Simplifica la creación de gráficos y elementos visuales, promoviendo un diseño intuitivo y atractivo.
            </p>
          </div>
        </Link>

        {/* Sexta Tarjeta - Bing IA */}
        <Link to="/Tool6">
          <div className="h-[350px] w-[350px] rounded-lg shadow-lg bg-transparent dark:bg-transparent flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">Bing IA</h2>
            <img 
              src="/img/bing.png" 
              alt="Bing IA" 
              className="w-24 h-24 object-contain mb-4" 
            />
            <p className="text-lg text-black dark:text-white text-justify px-4">
              Bing IA genera imágenes utilizando descripciones textuales, empleando inteligencia artificial para crear gráficos personalizados a partir de palabras.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default AIToolsPag;
