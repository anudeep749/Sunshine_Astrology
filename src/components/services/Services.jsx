import React from "react";
import ServicesBox from "./ServicesBox";  // Component to display individual services

const Services = () => {
  return (
    <section id="services" className="bg-secondary dark:bg-gray-900 dark:text-white py-16">
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Services
        </h1>
        <p className="text-slate-500 text-center md:w-[60%] mx-auto mb-8">
          Explore the different astrological services we offer to guide you on your life path. Whether you're seeking insights into your love life, career, or personal growth, we can help you navigate through the stars.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Individual service cards */}
        <ServicesBox 
          title="Personal Birth Chart Reading" 
          description="Get a detailed analysis of your birth chart, uncover your strengths, challenges, and life purpose."
          icon="🌟"
        />
        <ServicesBox 
          title="Love & Relationship Astrology" 
          description="Discover compatibility with your partner or gain clarity about your love life."
          icon="❤️"
        />
        <ServicesBox 
          title="Tarot Card Readings" 
          description="Receive intuitive guidance from the tarot to answer your burning questions and find clarity."
          icon="🔮"
        />
        <ServicesBox 
          title="Career & Finance Astrology" 
          description="Unlock insights into your career and financial prospects based on your astrological chart."
          icon="💼"
        />
        <ServicesBox 
          title="Daily/Weekly Horoscopes" 
          description="Stay updated with daily or weekly horoscopes that guide your decisions."
          icon="📅"
        />
        <ServicesBox 
          title="Spiritual Guidance Sessions" 
          description="Explore your spiritual path and receive guidance from the universe through astrology."
          icon="✨"
        />
      </div>
    </section>
  );
};

export default Services;
