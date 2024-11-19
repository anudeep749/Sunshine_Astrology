import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx"; 
import Footer from "./components/footer/Footer.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contacts from "./components/contacts/Contacts.jsx";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Testimonials />
      <Services />
      <Contacts />
      <Footer /> 
    </div>
  );
};

export default App;
