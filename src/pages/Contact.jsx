import React from 'react';

function Contact() {
  return (
    <div className="contact-page max-w-2xl mx-auto py-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-stone-800">Contact Us</h2>
      <form className="bg-white shadow-xl rounded-2xl px-8 pt-8 pb-8 mb-4 border border-stone-100">
        <div className="mb-4">
          <label className="block text-stone-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input className="shadow-sm appearance-none border border-stone-300 rounded-lg w-full py-3 px-4 text-stone-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" type="text" id="name" name="name" />
        </div>
        <div className="mb-4">
          <label className="block text-stone-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input className="shadow-sm appearance-none border border-stone-300 rounded-lg w-full py-3 px-4 text-stone-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" type="email" id="email" name="email" />
        </div>
        <div className="mb-6">
          <label className="block text-stone-700 text-sm font-bold mb-2" htmlFor="message">Message:</label>
          <textarea className="shadow-sm appearance-none border border-stone-300 rounded-lg w-full py-3 px-4 text-stone-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 h-32" id="message" name="message"></textarea>
        </div>
        <div className="flex items-center justify-between">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 w-full shadow-md hover:shadow-lg transform active:scale-95" type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;