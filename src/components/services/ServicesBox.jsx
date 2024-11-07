import React from "react";

const ServicesBox = ({ title, description, icon }) => {
  return (
    <div className="bg-white dark:bg-slate-800 text-black dark:text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-center text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-500 dark:text-slate-300">{description}</p>
    </div>
  );
};

export default ServicesBox;
