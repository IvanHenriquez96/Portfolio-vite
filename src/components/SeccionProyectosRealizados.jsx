import React from "react";
import todoPng from "../assets/todo.png";
import microPng from "../assets/micro.png";

export const SeccionProyectosRealizados = () => {
  return (
    <div className=" text-center">
      <h2 className="text-5xl font-bold m-12 ">Proyectos Realizados</h2>

      <div className="flex flex-col items-center justify-center m-5">
        <div class="grid grid-cols-3 border-2 border-white-500 p-5 rounded-lg my-5 gap-4">
          <img className="m-auto" src={todoPng} width={100} alt="logo todo" />
          <div className="col-span-2">
            <p className="text-3xl font-bold">TO DO APP</p>
            <p>El legendario TO DO APP para probar las acciones CRUD!</p>
          </div>

          <div className="col-span-3 flex justify-around mt-5">
            <button>Visitar Sitio</button>
            <button>Visitar Repositorio</button>
          </div>
        </div>

        <div class="grid grid-cols-3 border-2 border-white-500 p-5 rounded-lg my-5 gap-4">
          <img className="m-auto" src={microPng} width={100} alt="logo todo" />
          <div className="col-span-2">
            <p className="text-3xl font-bold">APP PARADEROS - API REDBUS</p>
            <p>¿Quieres saber en cuantos minutos llega la micro?</p>
          </div>

          <div className="col-span-3 flex justify-around mt-5">
            <button>Visitar Sitio</button>
            <button>Visitar Repositorio</button>
          </div>
        </div>
      </div>
    </div>
  );
};
