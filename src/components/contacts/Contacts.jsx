import React from "react";

const Contacts = () => {
  return (
    <section id="contact" className="bg-white dark:bg-slate-800 dark:text-white py-16">
      <div className="container md:w-[150%] sm:py-16 py-100">
      <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black dark:text-white">Contacts</h2>
          <p className="text-slate-500 dark:text-slate-300 mt-4">
          please feel free to contact
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-lg mx-auto text-center space-y-4">
          <p className="text-lg text-gray-800 dark:text-white">
            <strong>Email:</strong> <a href="mailto:astrologywebsite@gmail.com" className="text-teal-500">astrologywebsite@gmail.com</a>
          </p>
          <p className="text-lg text-gray-800 dark:text-white">
            <strong>Phone:</strong> <a href="tel:+19999999999" className="text-teal-500">+1 (999) 999-9999</a>
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contacts;
