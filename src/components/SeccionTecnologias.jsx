import React from "react";
import phpLogo from "../assets/php_logo.png";
import laravelLogo from "../assets/laravel_logo.png";
import nodeLogo from "../assets/node_logo.png";
import reactLogo from "../assets/react_logo.svg";
import mysqlLogo from "../assets/mysql_logo.png";

export const SeccionTecnologias = () => {
  return (
    <div className="bg-gray-700 flex space-x-10 justify-center md:space-x-20 p-5 my-20">
      <img src={phpLogo} width="50" alt="" />
      <img src={laravelLogo} width="50" alt="" />
      <img src={nodeLogo} width="50" alt="" />
      <img src={reactLogo} width="50" alt="" />
      <img src={mysqlLogo} width="50" alt="" />
    </div>
  );
};
