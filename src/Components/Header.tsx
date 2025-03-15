"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Images from "@/images";

function Header() {
  interface NavItem {
    name: string;
    link: string;
  }

  const navItems: NavItem[] = [
    { name: "Product", link: "/Product" },
    { name: "Company", link: "/Company" },
    { name: "Connect", link: "/Connect" },
  ];

  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preference in localStorage
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="bg-[hsl(356,100%,66%)] dark:bg-gray-900">
      <nav className="py-[25px] px-4 md:px-[30px] lg:px-[65px] xl:px-[150px] flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image
            src={Images.Logo1}
            alt="logo-image"
            width={100}
            height={40}
            className="max-w-none md:max-w-full"
          />
          <ul className="hidden md:flex items-center gap-5 pl-5 text-gray-200 dark:text-gray-300 font-semibold">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-black dark:hover:text-white transition duration-300">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <div className="auth hidden md:flex gap-5 items-center">
            <Link href="/login" className="text-gray-200 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white transition duration-300">
              Login
            </Link>
            <Link href="/signup" className="bg-white text-[hsl(353,100%,62%)] pt-2 pb-2 pl-8 pr-8 rounded-3xl font-semibold hover:bg-black hover:text-white transition duration-300">
              Sign up
            </Link>
          </div>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {!menuActive && <Image src={Images.Hamburger} alt="menu-toggle" />}
        </button>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[100%] sm:w-[70%] md:w-[50%] shadow-lg p-5 flex flex-col items-start gap-6 transform transition-transform duration-500 ease-in-out z-50 bg-white dark:bg-gray-800 ${
          menuActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="self-end mt-3">
          <Image src={Images.Close} alt="close-menu" />
        </button>

        <div className="h-screen w-full flex flex-col gap-6 pt-10 px-5">
          <ul className="flex flex-col gap-5 text-gray-800 dark:text-gray-300 font-semibold w-full">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="hover:text-[hsl(356,100%,66%)] dark:hover:text-white transition duration-300 block"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 w-full">
            <Link href="/login" className="text-gray-800 dark:text-gray-300 font-semibold hover:text-[hsl(356,100%,66%)] dark:hover:text-white transition duration-300 block" onClick={toggleMenu}>
              Login
            </Link>
            <Link href="/signup" className="bg-[hsl(356,100%,66%)] text-white text-center py-2 rounded-3xl font-semibold hover:bg-black dark:hover:bg-white dark:text-gray-900 transition duration-300 block" onClick={toggleMenu}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
