import React from "react";
import html from "../public/html.png";
import css from "../public/css.jpg";
import Figma from "../public/figma.png";
import Photoshop from "../public/photoshop.png";
import Canva from "../public/Canva.png";
import Msoffice from "../public/Msoffice.png";
import Sketch from "../public/sketch.png";
import Adobe from "../public/adobe.png";


function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: Figma, name: "Figma" },
    { id: 4, logo: Photoshop, name: "Photoshop" },
    { id: 5, logo: Canva, name: "Canva" },
    { id: 6, logo: Msoffice, name: "Ms-Office" },
    { id: 7, logo: Sketch, name: "Sketch" },
    { id: 8, logo: Adobe, name: "Adobe" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 my-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        SKILL SETS
      </h1>
      <p className="text-center text-lg mb-10 text-gray-700">
      UX/UI designer with a solid grasp of SDLC, STLC, and SQL, now transitioning to software quality engineering with 4 years in customer service.     </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border rounded-xl bg-white shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={logo}
              alt={name}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full mb-3"
            />
            <div className="text-xl font-semibold text-gray-800">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
