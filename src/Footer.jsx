import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-kumar-gupta-93a9b3283/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedinIn size={30} />
              </a>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; 2024 Manika M. All rights reserved.</p>
              <p className="text-sm">That's All About Me</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
