import React from "react";
import personImg from "../../assets/ancient-astrologer.jpg";

const Home = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase ">Welcome to</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
              Sunshine Astrology
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Your guide to the stars and beyond
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                Discover insights into your life,destiny,and future through astrology.
                Deepika astrology provides personalized readings,horoscope forecasts,
                and astrological guidance for all aspects of life.
              </p>
              <a
                href=" "
                className="inline-block primary-btn !my-3"
              >
                Get your Horoscope
              </a>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
