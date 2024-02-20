import Link from "next/link";
import Image from "next/image";
import React from "react";

interface NavbarItemProps {
  href: string;
  text: string;
  isOrange?: boolean;
  isLast?: boolean;
}

function NavbarItem({
  text,
  href,
  isOrange,
  isLast,
}: NavbarItemProps): JSX.Element {
  return (
    <a
      className={isLast ? "mr-0" : "mr-[25px]"}
      href={href}
      style={{ textDecoration: "none", outline: "none", letterSpacing: "0em" }}
    >
      <span
        className={`tracking-normal px-[15px] pt-2 pb-[10px] rounded-full 
        text-[15px] font-NimbusSans border-1 border-solid border-transparent ${
          isOrange ? "text-brand-orange" : "text-white"
        } hover:text-black ${
          isOrange ? "hover:bg-brand-orange" : "hover:bg-white"
        } transition-all duration-[400ms] ease-in-out`}
      >
        {text}
      </span>
    </a>
  );
}

export default function Navbar(): JSX.Element {
  return (
    <div
      className="navbar flex items-center justify-between sm:w-[750px] md:w-[970px] lg:w-[1170px] h-10 px-[15px]  mx-auto mt-[20px] max-sm:hidden transition-all duration-[400ms]"
    >
      <Link className="flex items-center justify-center transition-all duration-[400ms]" href="/">
        <div className="flex items-center">
          <Image
            alt="Leetcode"
            className="h-10"
            height={40}
            src="/logo.png"
            width={40}
          />
          <span
            className="text-white text-2xl font-TypoRound font-bold pl-[10px] 
              h-10 p-[2px]"
            style={{ fontWeight: 100 }}
          >
            NeatCode
          </span>
        </div>
      </Link>
      <div className="nav-right h-10">
        <div className="nav-menu transition-all duration-[400ms] m-2 text-sm ">
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
