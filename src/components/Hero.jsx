import React from "react";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 p-7 md:grid-cols-3 gap-4  h-screen flex items-center">
      <div className="col-span-2">
        <div className="text-center">
          <h1 className="text-6xl font-bold animate__animated animate__fadeInDown">
            IVÁN HENRIQUEZ
          </h1>
          <h2 className="text-4xl mt-3 font-bold animate__animated animate__fadeInUp">
            Web Developer
          </h2>
        </div>
      </div>
      <div className="mx-auto">
        <img
          src="vite.svg"
          width={250}
          alt=""
          className="animate__animated animate__fadeIn"
        />
      </div>
    </div>
  );
};
