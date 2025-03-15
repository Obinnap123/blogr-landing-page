// import React from 'react'
import Link from "next/link";
function HeroSection() {
  return (
    <>
      <div className="pt-[30px] px-4 md:pt-[90px] text-center">
        <h1 className="text-[35px] md:text-[50px] pb-5 md:leading-[70px] xl:text-[60px]">A Modern publishing platform</h1>
        <h3 className="text-[22px] md:text-2xl pb-8">Grow your audience and build your online brand</h3>
        <div className="flex justify-center gap-[10px]">
          <Link
            href="/startforfree"
            className="bg-white text-[hsl(353,100%,62%)] pt-2 pb-2 pl-4 pr-4 rounded-4xl font-semibold hover:bg-black hover:text-white transition duration-300"
          >
            Start for For
          </Link>
          <Link
            href="/learnmore"
            className=" text-white border pt-2 pb-2 pl-4 pr-4 rounded-3xl font-semibold hover:bg-black hover:text-white transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
