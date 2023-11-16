import Link from "next/link";
import React from 'react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className="navbar flex items-center justify-between min-[1200px]:w-[1170px] h-10 px-[15px]  mx-auto mt-[20px]">
            <Link href="/" className="flex items-center justify-center">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Leetcode" className="h-10" />
                    <span className="text-white text-2xl font-TypoRound font-bold pl-[10px] h-10 p-[2px]" 
                    style={{ fontWeight: 100 }}>NeatCode</span>
                </div>
            </Link>
            <div className="nav-right h-10">
              <div className="nav-menu h-full mb-auto mt-1 pr-2">
                    <NavbarItem href="/premium" text="Premium" isOrange={true} />
                    <NavbarItem href="/explore" text="Explore" />
                    <NavbarItem href="/product" text="Product" />
                    <NavbarItem href="/developer" text="Developer" />
                    <NavbarItem href="/signin" text="Sign in" isLast={true} />
              </div>
            </div>
        </div>
    );
};

type NavbarItemProps = {
    href: string;
    text: string;
    isOrange?: boolean;
    isLast?: boolean;
};
const NavbarItem: React.FC<NavbarItemProps> = ({ text, href, isOrange, isLast }) => {
    return (
        <a href={href} className={isLast?"mr-0":"mr-[25px]"} style={{ textDecoration: "none", outline: "none", letterSpacing: "0em", }}>
            <span className={`tracking-normal px-[15px] pt-2 pb-[10px] rounded-full text-[15px] font-NimbusSans border-1 border-solid border-transparent ${isOrange?"text-brand-orange":"text-white"} hover:text-black ${isOrange?"hover:bg-brand-orange":"hover:bg-white"} transition-all duration-[400ms] ease-in-out`}>{ text }</span>
        </a>
    );
};
export default Navbar;

