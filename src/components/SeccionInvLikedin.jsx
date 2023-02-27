import React from "react";
import logoLinkedin from "../assets/linkedin.png";

export const SeccionInvLikedin = () => {
  return (
    <div
      className="grid p-12 grid-cols-1 md:grid-cols-3 text-center gap-5"
      data-aos="zoom-in"
    >
      <div className="col-span-2 md:m-20">
        <h2 className="text-3xl p-5 font-bold">
          ¡Muchas Gracias Por La Visita!
        </h2>
        <p>
          Estaré subiendo proyectos cada vez mas grandes y complejos, si te
          interesa trabajar conmigo no dudes en apretar el logo para contactarme
          vía LinkedIn 💙
        </p>
      </div>
      <div className="m-auto ">
        <a
          href="https://www.linkedin.com/in/iv%C3%A1n-ignacio-henr%C3%ADquez-fica-00462a135/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={logoLinkedin}
            width={200}
            alt="logo linkedin"
            className="shake-bottom"
          />
        </a>
      </div>
    </div>
  );
};
