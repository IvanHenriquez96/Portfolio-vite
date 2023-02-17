import React from "react";

export const Presentacion = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  text-center">
      <div className="col-span-2">
        <h2 className="text-3xl font-bold m-2">Hola a todos!</h2>
        <p className="p-2 my-2">
          Mi nombre es Iván Henríquez, tengo 26 años, nacionalidad chilena. Soy
          Desarrollador Web FullStack, Trabajo profesionalmente desde Noviembre
          del año 2018 y actualmente estoy enfocado en dominar ambientes de
          Javascript (Stack MERN para ser mas preciso) no olviden pasarse por la
          sección de proyectos y echar un vistazo, un saludos!
        </p>
      </div>
      <div className="mx-auto p-5">
        <img
          src="vite.svg"
          width={100}
          alt=""
          className="animate__animated animate__fadeIn"
        />
      </div>
    </div>
  );
};
