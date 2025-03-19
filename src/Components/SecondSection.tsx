// import React from 'react'
import Image from "next/image";
import Images from "@/images";

function SecondSection() {
  return (
    <>
      <div className="relative lg:flex lg:items-center lg:justify-between bg-[hsl(237,17%,21%)] lg:gap-10 rounded-tr-[95px] rounded-bl-[80px] px-4">
        
        {/* Image Container */}
        <div className="relative w-full lg:max-w-[1000px] h-[300px] sm:h-[350px] md:h-[400px]">
          
          {/* Circle Image - Now Aligned with 16px Padding */}
          <div className="absolute inset-0 overflow-hidden flex justify-center  sm:px-0">
            <Image
              src={Images.Circle}
              alt="editor-preview"
              width={1000}
              height={500}
              className="absolute w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] 
              h-auto top-[-40px] sm:top-[-60px] md:top-[-100px] lg:top-[-300px] 
              lg:left-[-100px]"
            />
          </div>

          {/* Phone Image */}
          <Image
            src={Images.Phone}
            alt="editor-preview"
            width={1000}
            height={500}
            className="absolute w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[1000px] 
            h-auto top-[-80px] sm:top-[-100px] md:top-[-120px] lg:top-[-50px] 
            left-1/2 transform -translate-x-1/2 z-[10]"
          />
        </div>

        {/* Text Section */}
        <div className="text-white px-4 lg:pr-[150px] lg:flex lg:flex-col lg:justify-center h-full text-center pb-[60px] mt-[-20px]">
          <h2 className="text-2xl sm:text-3xl font-semibold pb-[20px]">State of the Art Infrastructure</h2>
          <p className="max-w-[110ch] tracking-wide leading-relaxed font-light">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>

      </div>
    </>
  );
}

export default SecondSection;
