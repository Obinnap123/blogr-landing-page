import Image from "next/image";
import Images from "@/images";

function FirstSection() {
  return (
    <>
      <h2 className="text-center px-4 md:px-0 mt-[50px] md:mt-[70px] lg:mt-[150px] text-4xl text-[hsl(208,49%,24%)] dark:text-darkText font-semibold">
        Design for the future
      </h2>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        <div className="px-4 pt-[50px] sm:pt-[50px] flex flex-col items-center text-center md:px-0  lg:pl-[65px] lg:pt-0 lg:text-left xl:pl-[150px]">
          <div className="pb-[50px] md:pt-[75px]">
            <h2 className="pb-[30px] text-[hsl(208,49%,24%)] dark:text-darkText text-2xl">
              Introducing an extensible editor
            </h2>
            <p className="max-w-[52ch] lg:max-w-[65ch] xl:max-w-[120ch] tracking-wide leading-relaxed text-gray-500 dark:text-gray-300">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="pb-[70px] mb-[130px] md:pb-[150px] md:mb-[70px]">
            <h2 className="pb-[30px] text-[hsl(208,49%,24%)] dark:text-darkText text-2xl">
              Robust content management
            </h2>
            <p className="max-w-[52ch] lg:max-w-[65ch] xl:max-w-[120ch] tracking-wide leading-relaxed text-gray-500 dark:text-gray-300">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>

        <div className=" relative h-[350px] xs:h-[400px] lg:h-[700px] w-full flex justify-center lg:overflow-hidden order-first lg:order-last">
          <Image
            src={Images.Editor1}
            alt="editor-preview"
            width={1000}
            height={500}
            className="px-4 pt-[30px] md:pt-0 md:px-0 absolute top-0 lg:right-[-180px] lg:max-w-[700px] h-auto hidden lg:block"
          />
          <Image
            src={Images.Editor2}
            alt="editor-preview"
            width={1000}
            height={500}
            className="px-4 pt-[50px] w-full max-w-[450px] absolute top-0 h-auto md:w-[500px] md:px-0 mx-auto lg:hidden"
          />
        </div>
      </div>
    </>
  );
}

export default FirstSection;
