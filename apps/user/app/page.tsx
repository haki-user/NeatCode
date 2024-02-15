import Link from "next/link";
import Navbar from "../components/navbar";
import Ipad from "../components/ipad";
import Body from "./body";
import "./page.css";
import "./globals.css";

export default function Home(): JSX.Element {
  return (
    <div className="landing-bg w-full h-full">
      <div className="header w-full h-[760px] top-[-80px] relative">
        <div
          className="header-background absolute w-full h-full"
          style={{
            background:
              "linear-gradient(-150deg, #222222 15%, #373737 70%, #3c4859 94%)",
            transform: "skewY(12deg)",
            transformOrigin: "100%",
          }}
        >
          <div
            className="w-1/3 h-[190px] absolute top-[380px] left-[-16.666%]"
            style={{ backgroundColor: "#383d44" }}
          />
          <div
            className="w-1/3 h-[190px] absolute top-0 right-[16.666%]"
            style={{ backgroundColor: "#2e2e2e" }}
          />
          <div
            className="w-1/3 h-[190px] absolute right-0 bottom-0"
            style={{ backgroundColor: "#2e2e2e" }}
          />
        </div>
        <div
          className="background-reverse top-96 absolute w-full h-full 
            bg-white z-[-1]"
          style={{ transform: "skewY(-12deg)", transformOrigin: 0 }}
        />
        <div
          className="header-content w-full h-full absolute 
            top-[80px]"
        >
          <Navbar />
          <div
            className="intro-container relative w-[1170px] px-[50px]
              mx-auto mt-[20px]"
          >
            <div className="intro-row flex">
              <div className="w-1/2">
                <Ipad />
              </div>
              <div className="w-[50%] text-center pt-[130px] px-[15px]">
                <h1
                  className="text-white text-[40px] pl-[15px] font-NimbusSans 
                  font-normal"
                >
                  A New Way to Learn
                </h1>
                <p
                  className="text-white font-NimbusSans text-[15px] font-normal 
                    opacity-50 mt-[33px] text-center leading-[1.9em] 
                    tracking-[0.03em] ml-[14px] mr-[-1px] mb-auto"
                >
                  NeatCode is the best platform to help you enhance your skills,
                  expand your knowledge and prepare for technical interviews.
                </p>
                <Link
                  className="shadow-hover rounded-full border-solid border
                    border-blue-b mt-[30px] ml-[14px] pl-3 pr-1 py-[6px] 
                    text-white font-NimbusSans text-[15px] font-light bg-blue-b 
                    hover:bg-dark-blue-b hover:border hover:border-dark-blue-b 
                    transition-all duration-400 inline-block leading-[21px] 
                    tracking-[0.03em]"
                  href="/signup"
                >
                  Create Account{" "}
                  <svg
                    className="inline"
                    fill="#FFFFFF"
                    height="18px"
                    viewBox="0 0 24 24"
                    width="18px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-container relative mt-[-220px]">
        <Body />
      </div>
    </div>
  );
}
