import Link from "next/link";
import React from 'react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className="navbar flex items-center justify-between sm:px-12 px-2 md:px-24">
            <Link href="/" className="flex items-center justify-center h-20">
                <div className="w-40 h-5 flex items-center">
                    <img src="/logo.png" alt="Leetcode" className="h-10" />
                    <span className="text-white text-2xl font-bold ml-2">NeatCode</span>
                </div>
            </Link>
            <div className="nav-right">
                <div className="flex items-center">
                    <NavbarItem href="/premium" text="Premium" isOrange={true} />
                    <NavbarItem href="/explore" text="Explore" />
                    <NavbarItem href="/product" text="Product" />
                    <NavbarItem href="/developer" text="Developer" />
                    <NavbarItem href="/signin" text="Sign in" />
                </div>
            </div>
        </div>
    );
};

type NavbarItemProps = {
    href: string;
    text: string;
    isOrange?: boolean;
};
const NavbarItem: React.FC<NavbarItemProps> = ({ text, href, isOrange }) => {
    console.log(text, isOrange, `text-${isOrange?"brand-orange":"white"}`);
    return (
    <div className="mr-7">
        <Link href={href}  
            className={`${isOrange?"text-brand-orange":"text-white"} px-2 py-1 sm:px-4 rounded-full text-sm font-medium border-1 border-solid border-transparent hover:text-black ${isOrange?"hover:bg-brand-orange":"hover:bg-white"} hover:border-1 hover:rounded-full ${isOrange?"hover:border-brand-orange":
            "hover:border-white"} transition duration-300 ease-in-out`} >
            { text }
        </Link>
    </div>
    );
};
export default Navbar;

