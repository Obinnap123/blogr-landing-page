// import React from 'react'
import Image from "next/image";
import Images from "@/images";
function SecondSection() {
  return (
    <>
     <div className="relative  lg:flex lg:items-center lg:justify-between bg-[hsl(237,17%,21%)] lg:gap-10 rounded-tr-[95px] rounded-bl-[80px]">
        <div className="relative w-full lg:max-w-[1000px] h-[330px]">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={Images.Circle}
              alt="editor-preview"
              width={1000}
              height={500}
              className="absolute top-[-60px] lg:top-[-300px] lg:left-[-100px]"
            />
          </div>
          <Image
            src={Images.Phone}
            alt="editor-preview"
            width={1000}
            height={500}
            className="absolute top-[-120px] lg:top-[-50px] left-0 z-[10] lg:pl-[114px]"
          />
        </div>

        <div className="text-white px-4 lg:pr-[150px] lg:flex lg:flex-col lg:justify-center h-full text-center pb-[80px] mt-[-35px]">
          <h2 className="text-3xl font-semibold pb-[20px]">State of the Art infrastructure</h2>
          <p className="max-w-[110ch] tracking-wide leading-relaxed font-light">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive
          </p>
        </div>
      </div>
    </>
  );
}

export default SecondSection;
