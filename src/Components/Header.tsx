"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <>
      <header className="bg-[hsl(356,100%,66%)]">
        <nav className="px-5 py-5 md:px-36 md:py-10 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Image
              src={Images.Logo1}
              alt="logo-image"
              width={150}
              height={40}
              className="max-w-none md:max-w-full"
            />
            <ul className="hidden md:flex items-center gap-5 pl-5 text-gray-200 font-semibold ">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-black transition duration-300"
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            <div className="auth flex gap-5 items-center">
              <Link
                href="/login"
                className="text-gray-200 font-semibold hover:text-black transition duration-300"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-white text-[hsl(353,100%,62%)] pt-2 pb-2 pl-8 pr-8 rounded-3xl font-semibold hover:bg-black hover:text-white transition duration-300"
              >
                Sign up
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
