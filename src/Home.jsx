import React from "react";
import pic from "../public/1.jpg";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiSketch } from "react-icons/si";
import { SiBehance } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome To Manika Portfolio</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-rose-700 font-bold"
                strings={["Graphic Designer", "UI/UX Designer "]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Hey there! I'm Manikya M, a passionate UI/UX Designer from Odisha, India, on a mission to create digital experiences that not only look good but also feel amazing. I believe in the magic of design to solve problems and connect with users on a deeper level. With a knack for blending aesthetics and functionality, I bring a unique perspective and always aim for excellence in every project I work on.</p>            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Active on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <GrInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/manika-m-manika/"target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  
                  <li>
                    <a href="https://github.com/" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working on</h1>
                <div className="flex space-x-5">
                <SiFigma className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                <SiAdobephotoshop className="text-2xl md:text-3xl hover:scale-110 duration-200  cursor-pointer" />
                <SiSketch className="text-2xl md:text-3xl hover:scale-110 duration-200  cursor-pointer" />
                <SiBehance className="text-2xl md:text-3xl hover:scale-110 duration-200  cursor-pointer" />

                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex flex-col items-center">
            <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="profile" />
            
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;

