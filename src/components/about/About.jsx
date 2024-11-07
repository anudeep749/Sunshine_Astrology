import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About 
            </h1>
          </div>
          <div className="">
            <p>
                Discover insights into your life,destiny,and future through astology.
                Deepika astrology provides personalized readings,horoscope forecasts,
                and astrological guidance for all aspects of life.
            </p>
            <br />
            <p>
                Discover insights into your life,destiny,and future through astology.
                Deepika astrology provides personalized readings,horoscope forecasts,
                and astrological guidance for all aspects of life.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
