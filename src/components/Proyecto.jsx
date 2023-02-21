import React from "react";

export const Proyecto = ({
  nombre,
  descripcion,
  url_img,
  url_sitio,
  url_repo,
}) => {
  return (
    <div className="grid grid-cols-3 border-2 border-white-500 p-5 rounded-lg my-5 gap-4 bg-[#330033]">
      <img className="m-auto" src={url_img} width={100} alt="logo todo" />
      <div className="col-span-2">
        <p className="text-3xl font-bold">{nombre}</p>
        <p>{descripcion}</p>
      </div>

      <div className="col-span-3 flex justify-around mt-5">
        <a href={url_sitio} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="text-violet-900 bg-white border border-violet-300 focus:outline-none hover:bg-violet-100 focus:ring-4 focus:ring-violet-500 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Visitar Sitio
          </button>
        </a>

        <a href={url_repo} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="text-violet-900 bg-white border border-violet-300 focus:outline-none hover:bg-violet-100 focus:ring-4 focus:ring-violet-500 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Visitar Repositorio
          </button>
        </a>
      </div>
    </div>
  );
};
