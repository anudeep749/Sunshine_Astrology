import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
const navMenus = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Services",
    link: "/#services",
  },
  {
    name: "Contacts",
    link: "/#contacts",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
      <nav className="bg-secondary dark:bg-gray-900 fixed top-0 left-0 w-full z-20 border-b border-y-red-900 dark:border-white overflow-hidden">
        <div className="container flex justify-between items-center py-3 sm:py-0">
          <div className="flex flex-row gap-4 items-center">
            <img src="src/assets/astro.jpg" alt=" " class="w-10 h-10  mb-1" />
            <h1 className="text-2xl md:text-4xl font-bold text-red-600 dark:text-white">
              Sree Veda Gaayatri Astro
            </h1>
          </div>
          <div>
            <div className="hidden sm:block">
              <ul className="flex items-center gap-5 dark:text-white">
                {navMenus.map((navMenu, index) => {
                  return (
                    <li key={index}>
                      <a
                        className="text-xl font-semibold px-5  md:py-4 inline-block cursor-pointer"
                        href={navMenu.link}
                      >
                        {navMenu.name}
                      </a>
                    </li>
                  );
                })}
                {/* Light and dark mode switcher */}
                {theme === "dark" ? (
                  <BiSolidSun
                    className="text-2xl dark:text-white"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <BiSolidMoon
                    className="text-2xl dark:text-white"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </ul>
            </div>
            {/* Mobile Responsive Menu */}
            <div className="sm:hidden">
              <div className="flex items-center gap-4">
                {/* Light and dark mode switcher */}
                {theme === "dark" ? (
                  <BiSolidSun
                    className="text-2xl dark:text-white"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <BiSolidMoon
                    className="text-2xl dark:text-white"
                    onClick={() => setTheme("dark")}
                  />
                )}
                <FiMenu
                  className="text-2xl cursor-pointer dark:text-white "
                  onClick={toggleMenu}
                />
              </div>
              {showMenu && (
                <div className=" fixed top-16 bg-white dark:text-white dark:bg-gray-950 shadow-md rounded-b-xl  left-0 w-full z-10 py-10">
                  <ul className="flex flex-col items-center gap-4">
                    {navMenus.map((navMenu, index) => {
                      return (
                        <li key={index}>
                          <a
                            className="text-xl font-semibold px-1 py-4 md:py-6 inline-block cursor-pointer"
                            href={navMenu.link}
                            onClick={() => setShowMenu(false)}
                          >
                            {navMenu.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;