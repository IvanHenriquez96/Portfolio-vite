import React from "react";

import logoGithub from "../assets/github_logo.png";
import logoLinkedin from "../assets/linkedin.png";
import logoInstagram from "../assets/ig.png";
import fotoPerfil from "../assets/perfil.png";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 p-7 md:grid-cols-5 gap-4  h-screen items-center">
      <div className="col-span-3">
        <div className="text-center">
          <h1 className="text-6xl font-bold" data-aos="fade-down">
            IVÁN HENRÍQUEZ
          </h1>
          <h2 className="text-4xl mt-3 font-bold" data-aos="fade-up">
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
              src={logoGithub}
              width={60}
              alt=""
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </a>
          <a
            href="https://cl.linkedin.com/in/ivan-ignacio-henriquez-fica-00462a135"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoLinkedin}
              width={60}
              alt=""
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </a>
          <a
            href="https://www.instagram.com/nachostrife/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoInstagram}
              width={60}
              alt=""
              data-aos="fade-up"
              data-aos-delay="700"
            />
          </a>
        </div>

        <p
          className="text-center md:text-2xl text-gray-200"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          Desarrollador Full Stack - PHP Laravel - Node - React - MYSQL
        </p>
      </div>
      <div className="mx-auto col-span-2">
        <img
          src={fotoPerfil}
          alt=""
          className="w-3/4 mx-auto"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};
