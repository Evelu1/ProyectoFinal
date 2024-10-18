// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
  const [t] = useTranslation("global");

  useEffect(() => {
    document.title = `${t("navbar.home")} | CREATIVE`;
  }, [t]);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Primera parte */}
      <div className="">
        <div className="relative isolate px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a0d8ef] to-[#6cc4e5] opacity-30 dark:from-[#a0d8ef] dark:to-[#6cc4e5] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl sm:py-48 lg:py-56">
            <div className="text-center text-black dark:text-white">
              <h1 className="text-2xl font-bold tracking-tight sm:text-5xl">
                {t("mainhome.work")}
              </h1>
              <p className="mt-6 text-lg leading-8">
                Ve a IA Tools si deseas visualizar las herramientas de IA que te pueden ayudar con tus procesos creativos.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/IATools"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  IA Tools
                </Link>
                <Link to="/IA" className="text-sm font-semibold leading-6 text-black dark:text-white">
                  Saber más sobre IA <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a0d8ef] to-[#6cc4e5] opacity-30 dark:from-[#a0d8ef] dark:to-[#6cc4e5] sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
