import React from "react";
import personImg from "../../assets/ancient-astrologer.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="w-full bg-secondary dark:bg-gray-900 dark:text-white pt-20"
      >
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-1 grid justify-items-center sm:justify-items-start">
              <p className="uppercase ">Welcome to</p>
              <p className="text-3xl md:text-3xl font-bold  text-red-600 dark:text-white">
                Sree Veda Gaayatri Astrology
              </p>
              <p className="text-2xl text-red-700 dark:text-white">
                Your guide to the stars and beyond
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                Discover insights into your life,destiny,and future through
                astrology. Sree Veda Gaayatri astrology provides personalized
                readings,horoscope forecasts, and astrological guidance for all
                aspects of life.
              </p>
              {/*<a href=" " className="inline-block primary-btn !my-3">
                Get your Horoscope
              </a>*/}
            </div>
          </div>
          {/* image section */}
          {/* <div
            className={`bg-[url("https://source.unsplash.com/random")] bg-no-repeat bg-center bg-cover `}
          > */}
          <div>
            <img
              src={personImg}
              className="w-full md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            />
            <div id="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
