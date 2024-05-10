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
    <div className="landing font-NimbusSans h-full w-full transition-all duration-[400ms] max-sm:pt-[60px]">
      <div className="header relative -top-[80px] h-[760px] w-full max-sm:h-[600px]">
        <div
          className="header-background absolute h-full w-full origin-right skew-y-12"
          style={{
            background: "linear-gradient(-150deg, #222222 15%, #373737 70%, #3c4859 94%)",
          }}>
          <div
            className="absolute right-[16.666%] top-0 h-[190px] w-1/3 transition-all duration-[400ms] max-sm:opacity-0"
            style={{ backgroundColor: "#2e2e2e" }}
          />
          <div className="absolute right-[49.999%] top-0 h-[190px] w-1/3 bg-[#222222] transition-all duration-[400ms] max-sm:opacity-0" />
          <div
            className="absolute -left-[16.666%] top-[380px] h-[190px] w-1/3 transition-all duration-[400ms] max-sm:opacity-0"
            style={{ backgroundColor: "#383d44" }}
          />
          <div
            className="absolute bottom-0 right-0 h-[190px] w-1/3 transition-all duration-[400ms] max-sm:opacity-0"
            style={{ backgroundColor: "#2e2e2e" }}
          />
        </div>
        <div
          className="background-reverse absolute top-0 -z-10 w-full origin-left
            -skew-y-12 bg-white max-sm:h-[990px] sm:max-md:h-[1070px] md:max-lg:h-[1130px] lg:h-[1150px]"
        />
        <div className="absolute right-[22%] top-[62.5rem] rotate-[10deg] opacity-70 brightness-0 grayscale invert">
          <Image alt="java icon" height={150} src="java.svg" width={110} />
        </div>
        <div className="absolute left-[22%] top-[85rem] -rotate-[10deg] opacity-70 brightness-0 grayscale invert">
          <Image alt="kotlin icon" height={150} src="swift.svg" width={110} />
        </div>
        <div className="absolute right-[37%] top-[103.125rem] -rotate-[5deg] opacity-70 brightness-0 grayscale invert">
          <Image alt="kotlin icon" height={80} src="kotlin.svg" width={80} />
        </div>
        <div className="absolute left-[27%] top-[131.438rem] rotate-[20deg] opacity-70 brightness-0 grayscale invert">
          <Image alt="kotlin icon" height={100} src="python.svg" width={100} />
        </div>
        <div className="header-content transition-all duration-[400ms]">
          <div className="top-[80px] pt-[20px] sm:relative">
            <Navbar />
          </div>
          <div
            className="intro-container mx-auto min-h-[400px] px-[50px] transition-all duration-[400ms]
              max-sm:min-h-[300px] max-sm:px-[15px] sm:mt-[100px] sm:w-[750px] md:w-[970px] lg:w-[1170px]">
            <div className="intro-row mx-[-15px] flex transition-all duration-[400ms] sm:relative">
              <div className="hidden px-[15px] transition-all duration-[400ms] md:block md:w-1/2">
                <Ipad />
              </div>
              <div className="relative m-auto px-[15px] text-center transition-all duration-[400ms] max-sm:pt-[60px] sm:pt-[100px] md:w-1/2">
                <h1
                  className="font-NimbusSans text-wrap text-[40px] font-normal 
                  leading-[44px] text-white">
                  A New Way to Learn
                </h1>
                <p
                  className="font-NimbusSans // m-auto mt-[40px] 
                    max-w-[600px] text-wrap text-center text-[15px] 
                    font-normal leading-[1.9em]  tracking-[0.03em] text-white opacity-50 transition-all duration-[400ms]">
                  NeatCode is the best platform to help you enhance your skills, expand your knowledge and
                  prepare for technical interviews.
                </p>
                <Link
                  className="shadow-hover border-blue-b font-NimbusSans bg-blue-b
                    hover:bg-dark-blue-b hover:border-dark-blue-b mt-[30px] inline-block
                    rounded-[1020px] border border-solid px-3 py-[6px] 
                    text-center text-[15px] font-light 
                    leading-[21px] tracking-[0.03em] text-white transition-all 
                    duration-[400ms] hover:border"
                  href="/signup">
                  Create Account &nbsp;
                  <FontAwesomeIcon icon={faAngleRight} size="xs" style={{ verticalAlign: "middle" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-container relative -mt-[300px]">
        <Body />
      </div>
      <div className="footer relative -mt-10 border-t-[1px] text-[#808080]">
        <br />
        <div className="flex justify-around text-sm">
          <div>Copyright © 2024 LeetCode</div>
          <span />
          <div className="text-[#373737]">
            {["Help Center", "Jobs", "Bug Bounty", "Students", "Terms", "Privacy Policy"].map((item, idx) => {
              return (
                <Link href={item} key={item}>
                  {item}
                  {idx < 5 && <span className="mx-[10px]">|</span>}
                </Link>
              );
            })}
            <span className="pl-5">United States</span>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
