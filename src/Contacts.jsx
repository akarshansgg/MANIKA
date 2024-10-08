import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i2biinp', 'template_t9xfxn6', form.current, 'FAUx_9sR3JSxUZLdd')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        e.target.reset();
        alert('Email Sent!');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contactPage" className="min-h-[calc(100vh-4rem)] w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
      <div id="contact" className="p-8">
        <h1 className="text-3xl font-bold mb-2 animate__animated animate__fadeIn">Get In Touch</h1>
        <span className="block text-base font-light mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Please fill the form and let me know the feedback.
        </span>
        
        <form className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-4" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="name" className="text-white bg-gray-800 p-4 w-full max-w-xl rounded-lg border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300" name="from_name" />
          <input type="email" placeholder="your email" className="text-white bg-gray-800 p-4 w-full max-w-xl rounded-lg border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300" name="from_email" />
          <textarea name="message" className="text-white bg-gray-800 p-4 w-full max-w-xl rounded-lg border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300" rows="5" placeholder="your message"></textarea>
          <button className="bg-blue-500 text-white py-3 px-14 rounded-full mt-4 mb-4 transition-transform transform hover:scale-105 hover:shadow-lg" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
