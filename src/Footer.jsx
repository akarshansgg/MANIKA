import React from "react";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Links */}
            

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
