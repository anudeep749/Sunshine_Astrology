import React from "react";
import TestimonialsLevel from "./TestimonialsLevel";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-white dark:bg-slate-800 dark:text-white py-16"
    >
      <div className="container mx-auto  space-y-4 py-12 sm:py-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 mt-4">
            See how we've helped our clients achieve their goals!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-terinary dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="src/assets/client1.jpg"
              alt="Testimonial Card 1"
              class="w-50 h-20 mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Client 1
            </h3>
            <p className="text-slate-500 dark:text-slate-300 mt-2">
              "The service was incredible! It really helped me understand my
              future better."
            </p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-terinary dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="src/assets/client2.jpg"
              alt="Testimonial Card 2"
              class="w-50 h-20 mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Client 2
            </h3>
            <p className="text-slate-500 dark:text-slate-300 mt-2">
              "Fantastic reading, very accurate. I was amazed by the insights
              shared."
            </p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-terinary dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="src/assets/client3.jpg"
              alt="Testimonial Card 3"
              class="w-50 h-20 mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Client 3
            </h3>
            <p className="text-slate-500 dark:text-slate-300 mt-2">
              "The reading was very helpful. It gave me a new perspective on my
              career."
            </p>
          </div>
        </div>
      </div>
      <div id="services" />
    </section>
  );
};

export default Testimonials;
