import Link from "next/link";
import Image from "next/image";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/navbar";
import Ipad from "../components/ipad";
import Body from "./body";
import "./page.css";
import "./globals.css";

export default function Home(): JSX.Element {
  return (
    <div className="landing w-full h-full font-NimbusSans transition-all duration-[400ms]">
      <div className="header w-full h-[760px] max-sm:h-[600px] top-[-80px] relative">
        <div
          className="header-background absolute max-sm:top-[60px] w-full h-full skew-y-12 origin-right"
          style={{
            background:
              "linear-gradient(-150deg, #222222 15%, #373737 70%, #3c4859 94%)",
          }}
        >
          <div
            className="w-1/3 h-[190px] absolute top-0 right-[16.666%] max-sm:opacity-0 transition-all duration-[400ms]"
            style={{ backgroundColor: "#2e2e2e" }}
          />
          <div className="w-1/3 h-[190px] absolute top-0 right-[49.999%] max-sm:opacity-0 bg-[#222222] transition-all duration-[400ms]" />
          <div
            className="w-1/3 h-[190px] absolute top-[380px] -left-[16.666%] max-sm:opacity-0 transition-all duration-[400ms]"
            style={{ backgroundColor: "#383d44" }}
          />
          <div
            className="w-1/3 h-[190px] absolute right-0 bottom-0 max-sm:opacity-0 transition-all duration-[400ms]"
            style={{ backgroundColor: "#2e2e2e" }}
          />
        </div>
        <div
          className="background-reverse top-0 absolute w-full -skew-y-12 origin-left
            bg-white -z-10 max-sm:h-[990px] sm:max-md:h-[1070px] md:max-lg:h-[1130px] lg:h-[1150px]"
        />
        <div className="absolute top-[62.5rem] right-[22%] rotate-[10deg] opacity-70 grayscale brightness-0 invert">
          <Image alt="java icon" height={150} src="java.svg" width={110} />
        </div>
        <div className="absolute top-[85rem] left-[22%] -rotate-[10deg] opacity-70 grayscale brightness-0 invert">
          <Image alt="kotlin icon" height={150} src="swift.svg" width={110} />
        </div>
        <div className="absolute top-[103.125rem] right-[37%] -rotate-[5deg] opacity-70 grayscale brightness-0 invert">
          <Image alt="kotlin icon" height={80} src="kotlin.svg" width={80} />
        </div>
        <div className="absolute top-[131.438rem] left-[27%] rotate-[20deg] opacity-70 grayscale brightness-0 invert">
          <Image alt="kotlin icon" height={100} src="python.svg" width={100} />
        </div>
        <div
          className="header-content w-full h-full absolute 
            top-[80px] transition-all duration-[400ms]"
        >
          <Navbar />
          <div
            className="intro-container relative sm:w-[750px] md:w-[970px] lg:w-[1170px] px-[50px] max-sm:px-[15px]
              mx-auto sm:mt-[20px] transition-all duration-[400ms]"
          >
            <div className="intro-row flex mx-[-15px] transition-all duration-[400ms]">
              <div className="md:w-1/2 hidden md:block px-[15px] transition-all duration-[400ms]">
                <Ipad />
              </div>
              <div className="md:w-1/2 m-auto text-center pt-[100px] max-sm:pt-[60px] px-[15px] transition-all duration-[400ms]">
                <h1
                  className="text-white text-[40px] leading-[44px] font-NimbusSans 
                  font-normal text-wrap"
                >
                  A New Way to Learn
                </h1>
                <p
                  className="text-white font-NimbusSans text-[15px] font-normal 
                    opacity-50 mt-[40px] text-center leading-[1.9em] 
                    // tracking-[0.03em]  m-auto text-wrap max-w-[600px] transition-all duration-[400ms]"
                >
                  NeatCode is the best platform to help you enhance your skills,
                  expand your knowledge and prepare for technical interviews.
                </p>
                <Link
                  className="shadow-hover rounded-[1020px] border-solid border
                    border-blue-b mt-[30px] px-3 py-[6px]
                    text-white font-NimbusSans text-[15px] font-light bg-blue-b 
                    hover:bg-dark-blue-b hover:border hover:border-dark-blue-b 
                    transition-all duration-[400ms] inline-block leading-[21px] 
                    tracking-[0.03em] text-center"
                  href="/signup"
                >
                  Create Account &nbsp;
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="xs"
                    style={{ verticalAlign: "middle" }}
                  />
                  {/* <svg
                    className="inline"
                    fill="#FFFFFF"
                    height="18px"
                    viewBox="0 0 24 24"
                    width="18px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                  </svg> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-container relative -mt-[240px] sm:-mt-[300px]">
        <Body />
      </div>
    </div>
  );
}
