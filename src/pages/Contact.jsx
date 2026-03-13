import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 text-sm sm:text-lg max-w-2xl mx-auto">
            Get in touch with us for more information about Ethiopian culture and heritage.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none h-32"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Back Link */}
          <div className="mt-6 text-center">
            <Link to="/" className="text-emerald-600 hover:text-emerald-700">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

