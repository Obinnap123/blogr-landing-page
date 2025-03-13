import Image from "next/image";
import Link from "next/link";
import Images from "@/images";

function Footer() {
  return (
    <>
      <footer className="bg-[hsl(240,10%,16%)] rounded-tr-[95px]">
        <nav className="py-[60px] px-4 md:px-[30px] lg:px-[65px] xl:px-[150px]  ">
          <div className="flex flex-col items-center text-center gap-10 md:flex-row md:items-start md:text-left md:gap-[80px] lg:gap-30 xl:gap-40">
            <Image
              src={Images.Logo1}
              alt="logo-image"
              width={100}
              height={40}
              className="max-w-none md:max-w-full"
            />
            <div className="flex flex-col items-center md:flex-row md:items-start gap-10 md:gap-[80px] lg:gap-30 xl:gap-40 text-gray-300">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white">Product</h3>
                <ul className="pt-2.5 space-y-2">
                  <li>Overview</li>
                  <li>Pricing</li>
                  <li>Marketplace</li>
                  <li>Features</li>
                  <li>Integrations</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white">Company</h3>
                <ul className="pt-2.5 space-y-2">
                  <li>About</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white">Connect</h3>
                <ul className="pt-2.5 space-y-2">
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* <div>
            boyuretyj
        </div> */}
      </footer>
    </>
  );
}

export default Footer;
