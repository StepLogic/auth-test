import { uuid } from "@lib/uuid";
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { links } from "./Navbar";
import { KgFacebook, KgGoogle, KgTelegram, KgWhatsApp } from "./ui/Icons";

type Props = {
  //   title: ReactNode;
};
export default function Footer() {
  return (
    <footer className="w-full bg-[#5B5B5B] py-4 md:h-[400px] flex justify-center items-center">
      <div className="md:w-1/2 px-3 lg:px-0 mx-auto flex flex-col justify-center text-center lg:gap-12 gap-8">
        <div className="flex flex-col md:flex-row gap-6 justify-center lg:items-center text-start md:text-center">
          {links.map((link) => (
            <Link
              key={uuid()}
              className="uppercase text-xl lg:text-3xl"
              href={link.link}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-row lg:justify-center gap-4 md:gap-12">
          <Link key={uuid()} className="uppercase text-base" href={"/about-us"}>
            About Us
          </Link>
          <Link
            key={uuid()}
            className="uppercase text-base"
            href={"/terms-of-service"}
          >
            Terms of Service
          </Link>
        </div>
        <Link
          key={uuid()}
          className="uppercase textbase"
          href={"/terms-of-service"}
        >
          contact us
        </Link>
        <div className="flex flex-row items-center justify-center gap-8">
          <KgFacebook className={"w-8 h-8"} />
          <KgWhatsApp />
          <KgGoogle className={"w-8 h-8"} />
          <KgTelegram />
        </div>
        <Link
          key={uuid()}
          className="uppercase text-base"
          href={"/terms-of-service"}
        >
          Copyright fifash.all right reserved
        </Link>
      </div>
    </footer>
  );
}
