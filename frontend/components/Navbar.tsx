import { uuid } from "@lib/uuid";
import Head from "next/head";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { BiCart, BiUserCircle } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import OptimizedImage from "./ui/OptimizedImage";
type Props = {};
export const links: Array<{
  name: string;
  link: string;
}> = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
];
export default function Navbar() {
  const [expandMenu, setExpandMenu] = useState<boolean>(false);
  return (
    <>
      <header className="navbar md:hidden">
        <div className="container flex-row">
          <button onClick={() => setExpandMenu((r) => !r)}>
            <FaBars />
          </button>
          <div className="flex flex-row gap-4">
            <BiUserCircle />
            <BiCart />
          </div>
        </div>
      </header>
      <aside data-open={`${expandMenu}`} className="sideMenu">
        <div className="content p-4 gap-8">
          <div className="flex flex-row items-center justify-between">
            <OptimizedImage
              parentClassName="!w-[120px] !h-[50px]"
              alt={"Logo"}
              src={"/logo/logo.png"}
            />
            <button
              className="text-black "
              onClick={() => setExpandMenu((r) => !r)}
            >
              <AiOutlineCloseCircle className={"w-6 h-6"} />
            </button>
          </div>
          <div className="flex flex-row items-center gap-6">
            <button className="text-black">
              <AiOutlineSearch />
            </button>
            <input className="no-style" placeholder="Search Here" />
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link key={uuid()} className="link" href={link.link}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      <header className="navbar hidden md:block">
        <div className="container flex-row">
          <OptimizedImage
            parentClassName="!w-[120px] !h-[40px]"
            alt={"Logo"}
            src={"/logo/logo.png"}
          />
          <nav className="flex flex-row items-center gap-6">
            {links.map((link) => (
              <Link key={uuid()} className="link" href={link.link}>
                {link.name}
              </Link>
            ))}
            <button>
              <AiOutlineSearch />
            </button>
          </nav>
          <div className="flex flex-row items-center gap-6">
            <BiUserCircle />
            <BiCart />
            <Link className="btn btn-primary" href={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
