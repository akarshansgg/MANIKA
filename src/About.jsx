import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-4xl font-bold mb-10 text-center text-purple-600">YOU WANT TO KNOW ME SCROLL DOWN</h1>
      
      <div className="mb-12 text-center">
        <p className="text-lg text-gray-800 mb-6">
        Detail-oriented UX/UI designer launching career as a software quality Engineer. I have a basic understanding of the Software Development Lifecycle (SDLC) and Software Testing Life Cycle (STLC ) ,almost 4 years of experience in customer service and office management with exposure to SQL server and /or document databases . understanding of ux/ui design </p>
      </div>

      <table className="w-full border-separate border-spacing-4">
        <tbody>
          {/* Education & Training */}
          <tr>
            <td className="font-semibold text-xl text-white bg-green-500 py-2 px-4 rounded-t-lg" colSpan="2">EDUCATION </td>
          </tr>
          <tr>
            <td className="font-medium text-blue-800 bg-blue-100 border border-blue-200 p-4 rounded-lg">
            (MAE)
            </td>
            <td className="text-gray-700 bg-blue-50 border border-blue-200 p-4 rounded-lg">
            Utkal University, Bhubaneswar (2021 - 2025) 
            Master degree of Applied Economics (MAE) Expected Graduation: [May - 2019 ]            </td>
          </tr>
          
          <tr>
            <td className="font-semibold text-xl text-white bg-purple-500 py-2 px-4 rounded-t-lg" colSpan="2">ACHIEVEMENTS</td>
          </tr>
          <tr>
            <td className="text-gray-800 bg-purple-100 border border-purple-200 p-4 rounded-lg" colSpan="2">
            Manikya - Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help.                        </td>
          </tr>
          <tr>
            <td className="text-gray-800 bg-purple-50 border border-purple-200 p-4 rounded-lg" colSpan="2">
             Manikya - Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help.             </td>
          </tr>

          Mission Statement
          <tr>
            <td className="font-semibold text-xl text-white bg-teal-500 py-2 px-4 rounded-t-lg" colSpan="2">Mission Statement</td>
          </tr>
          <tr>
            <td className="text-gray-800 bg-teal-100 border border-teal-200 p-4 rounded-lg" colSpan="2">
              My mission is to leverage my skills and creativity to deliver innovative Graphic Design solutions that exceed client expectations and make a positive impact on the digital landscape. I am dedicated to continuous learning and growth, always seeking new challenges and opportunities to expand my expertise.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About;
