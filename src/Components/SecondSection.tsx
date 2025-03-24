import Image from "next/image";
import Images from "@/images";

function SecondSection() {
  return (
    <>
      <div className="relative lg:flex lg:items-center lg:justify-between bg-[hsl(237,17%,21%)] dark:bg-darkBg rounded-tr-[95px] rounded-bl-[80px] px-4 lg:px-0 mb-[60px]">
        {/* Image Container */}
        <div className="relative w-full lg:max-w-[550px] xl:max-w-[750px] h-[300px] sm:h-[350px] md:h-[400px]">
          {/* Circle Image - Now Aligned with 16px Padding */}
          <div className="absolute inset-0 overflow-hidden flex justify-center sm:px-0">
            <Image
              src={Images.Circle}
              alt="editor-preview"
              width={1000}
              height={500}
              className="absolute w-full max-w-[350px] sm:max-w-[500px] md:max-w-[500px] lg:max-w-[550px] 
              h-auto top-[-40px] sm:top-[-60px] md:top-[-100px] lg:top-[-260px]
              lg:left-[-100px]"
            />
          </div>

          {/* Phone Image */}
          <Image
            src={Images.Phone}
            alt="editor-preview"
            width={1000}
            height={500}
            className="absolute w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px] 
            h-auto top-[-80px] sm:top-[-100px] md:top-[-120px] lg:top-[-50px] 
            left-1/2 transform -translate-x-1/2 z-[10]"
          />
        </div>

        {/* Text Section */}
        <div className="text-white dark:text-darkText px-4 lg:pr-[65px] lg:flex lg:flex-col lg:justify-center h-full text-center pb-[60px] lg:pb-0 lg:px-0 mt-[-20px] xl:pr-[150px]">
          <h2 className="text-2xl sm:text-3xl font-semibold pb-[20px] lg:text-nowrap lg:text-left">
            State of the Art Infrastructure
          </h2>
          <p className="max-w-[110ch] tracking-wide leading-relaxed font-light md:w-[100%] md:max-w-[512px] md:mx-auto lg:text-left text-gray-300 dark:text-gray-400">
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
