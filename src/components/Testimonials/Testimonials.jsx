import React from "react";
import TestimonialsLevel from "./TestimonialsLevel";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white dark:bg-slate-800 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black dark:text-white">What Our Clients Say</h2>
          <p className="text-slate-500 mt-4">See how we've helped our clients achieve their goals!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-black dark:text-white">Client 1</h3>
            <p className="text-slate-500 dark:text-slate-300 mt-2">"The service was incredible! It really helped me understand my future better."</p>  
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-black dark:text-white">Client 2</h3>
            <p className="text-slate-500 dark:text-slate-300 mt-2">"Fantastic reading, very accurate. I was amazed by the insights shared."</p>  
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-black dark:text-white">Client 3</h3>
            <p className="text-slate-500 dark:text-slate-300 mt-2">"The reading was very helpful. It gave me a new perspective on my career."</p>
          </div>

          {/* Testimonial Card 4 */}
          <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-black dark:text-white">Client 4</h3>
            <p className="text-slate-500 dark:text-slate-300 mt-2">"I felt a deep connection with the reading. Very enlightening experience."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
