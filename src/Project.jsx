import React, { useState } from "react";
import Spotify from "../public/Spotify.png";
import Food from "../public/Food.png";
import Weather from "../public/Weather.png";
import Game from "../public/Game.png";
import Lending from "../public/Lending.png";
import Netflix from "../public/Netflix.png";
import Buddy from "../public/Buddy.jpg";
function Project() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const cardItem = [
    
  
    {
      id: 1,
      logo: Weather,
      name: "Weather Website",
      description: "A weather app built with HTML, CSS, and JavaScript. It provides current weather information based on the user's location and features a clean, responsive design. This project showcases skills in web development and API integration.",
    },
   
    {
      id: 2,
      logo: Food,
      name: "Food Delivery App Design",
      link: "https://www.behance.net/mamsmunu",
      description: "A user-friendly food delivery app design with easy navigation, real-time order tracking, and secure payments. Personalization, loyalty rewards, and restaurant filters enhance the experience.",
    },
    {
      id: 3,
      logo: Buddy,
      name: "Plant Buddy Application",
      link: "https://www.behance.net/mamsmunu",
      description: "A user-friendly food delivery app design with easy navigation, real-time order tracking, and secure payments. Personalization, loyalty rewards, and restaurant filters enhance the experience.",
    },
    
   
  ];

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 lg:px-16 my-12"
    >
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Live Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardItem.map(({ id, logo, name, link, description }) => (
          <div
            key={id}
            className="border-2 border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden bg-white"
          >
            <a href={link} target="_blank" rel="no opener no-referrer">
              <div className="relative cursor-pointer">
                <img
                  src={logo}
                  className="w-full h-48 object-cover"
                  alt={name}
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-gray-900 to-transparent text-white text-lg font-semibold text-center">
                  {name}
                </div>
              </div>
            </a>
            <div className="p-4">
              <button
                onClick={() => toggleExpand(id)}
                className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                {expanded[id] ? "Show Less" : "Show More"}
              </button>
              {expanded[id] && (
                <p className="mt-4 text-gray-700 text-sm">
                  {description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
