import Link from "next/link";
import Image from "next/image";
import React from "react";

interface NavbarItemProps {
  href: string;
  text: string;
  isOrange?: boolean;
  isLast?: boolean;
}

function NavbarItem({ text, href, isOrange, isLast }: NavbarItemProps): JSX.Element {
  return (
    <a
      className={isLast ? "mr-0" : "mr-[25px]"}
      href={href}
      style={{ textDecoration: "none", outline: "none", letterSpacing: "0em" }}>
      <span
        className={`font-NimbusSans border-1 rounded-full border-solid border-transparent 
        px-[15px] pb-[10px] pt-2 text-[15px] tracking-normal ${
          isOrange ? "text-brand-orange" : "text-white"
        } hover:text-black ${
          isOrange ? "hover:bg-brand-orange" : "hover:bg-white"
        } transition-all duration-[400ms] ease-in-out`}>
        {text}
      </span>
    </a>
  );
}

export default function Navbar(): JSX.Element {
  return (
    <div className="navbar mx-auto flex h-10 items-center justify-between px-[15px] transition-all duration-[400ms]  max-sm:hidden  sm:w-[750px] md:w-[970px] lg:w-[1170px]">
      <Link className="flex items-center justify-center transition-all duration-[400ms]" href="/">
        <div className="flex items-center">
          <Image alt="Leetcode" className="h-10" height={40} src="/logo.png" width={40} />
          <span
            className="font-TypoRound h-10 p-[2px] pl-[10px] text-2xl 
              font-bold text-white"
            style={{ fontWeight: 100 }}>
            NeatCode
          </span>
        </div>
      </Link>
      <div className="nav-right h-10">
        <div className="nav-menu m-2 text-sm transition-all duration-[400ms] ">
          <NavbarItem href="/premium" isOrange text="Premium" />
          <NavbarItem href="/explore" text="Explore" />
          <NavbarItem href="/product" text="Product" />
          <NavbarItem href="/developer" text="Developer" />
          <NavbarItem href="/signin" isLast text="Sign in" />
        </div>
      </div>
    </div>
  );
}
