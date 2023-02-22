import React from "react";
import { Proyecto } from "./Proyecto";

import todoPng from "../assets/todo.png";
import microPng from "../assets/micro.png";

import proyectos from "../Controllers/ProyectosController";

export const SeccionProyectosRealizados = () => {
  return (
    <div id="seccionProyectosRealizados" className=" text-center p-5">
      <h2 className="text-5xl font-bold m-12 " data-aos="zoom-in">
        Proyectos Realizados
      </h2>
      <div className="flex flex-col items-center justify-center m-5">
        {proyectos.map((proyecto) => (
          <Proyecto
            key={proyecto.nombre}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            url_img={proyecto.url_img}
            url_sitio={proyecto.url_sitio}
            url_repo={proyecto.url_repo}
          />
        ))}
      </div>
      <p className="text-4xl my-10 font-bold" data-aos="zoom-in">
        ¡Seguimos Trabajando! 🚀
      </p>
    </div>
  );
};
