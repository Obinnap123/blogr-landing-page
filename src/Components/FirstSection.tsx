import Image from "next/image";
import Images from "@/images";

function FirstSection() {
  return (
    <>
      {/* Heading */}
      <h2 className="text-center px-4 md:px-[0] mt-[50px] md:mt-[150px] text-4xl text-[hsl(208,49%,24%)] dark:text-darkText font-semibold">
        Design for the future
      </h2>

      <div className="flex flex-col md:flex-row justify-center md:justify-between">
        {/* Left Content */}
        <div className="px-4 md:pl-[150px]">
          <div className="py-[50px] md:py-[60px]">
            <h2 className="pb-[30px] text-[hsl(208,49%,24%)] dark:text-darkText text-2xl">
              Introducing an extensible editor
            </h2>
            <p className="max-w-[52ch] tracking-wide leading-relaxed text-gray-500 dark:text-gray-300">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="pb-[70px] md:pb-[150px]">
            <h2 className="pb-[30px] text-[hsl(208,49%,24%)] dark:text-darkText text-2xl">
              Robust content management
            </h2>
            <p className="max-w-[120ch] tracking-wide leading-relaxed text-gray-500 dark:text-gray-300">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[380px] md:h-[500px] w-full md:overflow-hidden order-first md:order-last">
          <Image
            src={Images.Editor1}
            alt="logo-image"
            width={500}
            height={40}
            className="px-4 pt-[30px] md:pt[0] md:px-0 absolute top-0 md:right-[-150px] md:w-[1000px] h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default FirstSection;
