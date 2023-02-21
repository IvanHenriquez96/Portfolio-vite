import React from "react";

import logoGithub from "../assets/github_logo.png";
import logoLinkedin from "../assets/linkedin.png";
import logoInstagram from "../assets/ig.png";
import fotoPerfil from "../assets/perfil.png";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 p-7 md:grid-cols-5 gap-4  h-screen items-center animate__animated animate__fadeIn">
      <div className="col-span-3">
        <div className="text-center">
          <h1 className="text-6xl font-bold animate__animated animate__fadeInDown">
            IVÁN HENRÍQUEZ
          </h1>
          <h2 className="text-4xl mt-3 font-bold animate__animated animate__fadeInUp">
            Web Developer
          </h2>
        </div>
        <div className="flex justify-center space-x-6 m-10">
          <a
            href="http://github.com/IvanHenriquez96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="animate__animated animate__fadeIn"
              src={logoGithub}
              width={60}
              alt=""
            />
          </a>
          <a
            href="https://cl.linkedin.com/in/ivan-ignacio-henriquez-fica-00462a135"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="animate__animated animate__fadeIn"
              src={logoLinkedin}
              width={60}
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/nachostrife/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="animate__animated animate__fadeIn"
              src={logoInstagram}
              width={60}
              alt=""
            />
          </a>
        </div>

        <p className="text-center md:text-2xl text-gray-200">
          Desarrollador Full Stack - PHP Laravel - Node - React - MYSQL
        </p>
      </div>
      <div className="mx-auto col-span-2">
        <img
          src={fotoPerfil}
          alt=""
          className="animate__animated animate__flipInY animate__delay-1s w-3/4 mx-auto"
        />
      </div>
    </div>
  );
};
