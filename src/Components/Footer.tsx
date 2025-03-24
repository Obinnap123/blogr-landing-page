import Image from "next/image";
import Link from "next/link";
import Images from "@/images";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "/overview" },
      { name: "Pricing", href: "/pricing" },
      { name: "Marketplace", href: "/marketplace" },
      { name: "Features", href: "/features" },
      { name: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "Newsletter", href: "/newsletter" },
      { name: "LinkedIn", href: "https://linkedin.com", external: true },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-[hsl(240,10%,16%)] rounded-tr-[95px]">
      <nav className="py-[60px] px-4 md:px-[30px] lg:px-[65px] xl:px-[150px]">
        <div className="flex flex-col items-center text-center gap-10 md:flex-row md:items-start md:text-left md:gap-[80px] lg:gap-30 xl:gap-40">
          {/* Logo */}
          <Image
            src={Images.Logo1}
            alt="logo-image"
            width={100}
            height={40}
            className="max-w-none md:max-w-full"
          />

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:flex-row md:items-start gap-10 md:gap-[80px] lg:gap-30 xl:gap-40 text-gray-300">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col">
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <ul className="pt-2.5 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-white"
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
