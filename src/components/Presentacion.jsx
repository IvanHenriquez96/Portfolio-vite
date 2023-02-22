import React from "react";

import imgPresentacion from "../assets/saludo.png";
export const Presentacion = () => {
  return (
    <div className="" data-aos="zoom-in">
      <div className="grid grid-cols-1 md:grid-cols-3  text-center md:px-20">
        <div className="col-span-2">
          <h2 className="text-5xl font-bold m-5">¡Hola a todos!</h2>
          <p className="p-5 md:px-20 my-5 text-justify font-light">
            Mi nombre es Iván Henríquez, tengo 26 años, nacionalidad chilena.
            Soy Desarrollador Web FullStack, Trabajo profesionalmente desde
            Noviembre del año 2018 y actualmente estoy enfocado en dominar
            ambientes de Javascript (Stack MERN para ser mas preciso) no olviden
            pasarse por la sección de proyectos y echar un vistazo, un saludos!
          </p>
        </div>
        <div className="m-auto p-5 ">
          <img
            src={imgPresentacion}
            width={200}
            alt=""
            className="animate__animated animate__fadeIn"
          />
        </div>
      </div>
    </div>
  );
};
