// eslint-disable-next-line no-unused-vars 
import React from 'react';

function IAPag() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center py-10 px-4">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full md:w-2/3 mb-10">
        {/* Contenedor de imágenes a la izquierda */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <div className="flex flex-col mt-16"> {/* Margen superior a 16 para ajustar el espacio */}
            <img 
              src="/img/IA2.jpeg" // Ruta de la nueva imagen relacionada con IA
              alt="Imagen relacionada con Inteligencia Artificial"
              className="w-full h-auto rounded-lg mb-8" // Margen inferior de 2 para espacio entre imágenes
            />
            <img 
              src="/img/IA.jpeg" // Ruta de la imagen IA
              alt="Imagen relacionada con Inteligencia Artificial"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Tarjeta de información a la derecha */}
        <div className="md:w-1/2 md:ml-8 mt-16"> {/* Ajustar el margen superior aquí para alinearlo con las imágenes */}
          <div className="h-auto w-full rounded-lg shadow-none bg-transparent dark:bg-transparent flex flex-col p-4">
            <h1 className="text-4xl font-bold mb-4 text-black dark:text-white text-center">Inteligencia Artificial</h1>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">¿Qué es?</h2>
            <p className="text-lg text-black dark:text-white text-justify">
              La Inteligencia Artificial (IA) se refiere a la simulación de procesos de inteligencia humana por parte de sistemas informáticos. Estos procesos incluyen el aprendizaje, el razonamiento y la auto-corrección.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">¿Por qué es importante?</h3>
            <p className="text-black dark:text-white text-justify">
              La IA es importante porque transforma industrias, automatiza procesos, mejora la toma de decisiones y personaliza servicios, abarcando sectores como la salud, la educación y el entretenimiento.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">¿Cómo debemos utilizarla?</h3>
            <p className="text-black dark:text-white text-justify">
              Para utilizar la IA de manera efectiva, debemos comprender sus capacidades y limitaciones, asegurándonos de que su implementación sea ética y transparente, y que sirva para mejorar la calidad de vida de las personas.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Impacto en la industria creativa</h2>
            <p className="text-lg text-black dark:text-white text-justify">
              La inteligencia artificial está revolucionando la industria creativa al facilitar la generación de contenido visual, musical y textual. Las herramientas de IA ayudan a los creativos a explorar nuevas posibilidades y a superar barreras tradicionales.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">Ventajas de la IA:</h3>
            <ul className="list-disc pl-5 text-black dark:text-white">
              <li>Personalización de experiencias artísticas.</li>
              <li>Automatización de tareas repetitivas.</li>
              <li>Facilitación de la colaboración entre artistas.</li>
              <li>Exploración de nuevos estilos y técnicas creativas.</li>
            </ul>
            <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">Desventajas de la IA:</h3>
            <ul className="list-disc pl-5 text-black dark:text-white">
              <li>Dependencia de la tecnología.</li>
              <li>Desplazamiento de trabajos creativos tradicionales.</li>
              <li>Problemas de originalidad y derechos de autor.</li>
              <li>Riesgos éticos en la creación y uso de contenido generado por IA.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IAPag;
