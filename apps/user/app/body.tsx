import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from '@fortawesome/pro-solid-svg-icons'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Body(): JSX.Element {
  return (
    <div>
      <div className="explore-section-container min-h-[400px]">
        <div className="explore-section">
          <div className="explore-section-content flex w-full h-96 bg-[#cccc]">
            <div className="w-1/2 h-full bg-red-50 flex flex-col justify-between items-end p-10">
              <div className="w-full  bg-white flex justify-end text-[#1da09c]">
                <h2 className="text-2xl">Start Exploring</h2>
                <div className="w-24 h-24 bg-red-600 relative">
                  <div className="absolute right-8 left-8 w-9 h-full bg-blue-50 py-8 px-1">
                    <FontAwesomeIcon
                      color="#34a297"
                      icon={faGraduationCap}
                      width={24}
                    />
                  </div>
                </div>
              </div>
              <p className="w-full text-right text-sm font-400 opacity-50 p-8 leading-7">
                Explore is a well-organized tool that helps you get the most out
                of NeatCode by providing structure to guide your progress
                towards the next step in your programming career.
              </p>
              <div className="w-full h-10 bg-white text-right text-[#3fbbff]">
                <p className="text-sm">Get Started {`>`}</p>
              </div>
            </div>
            <div className="w-1/2 h-full bg-blue-600"></div>
          </div>
        </div>
      </div>
      <div className="product-section-container">product</div>
      <div className="developer-section-container">developer</div>
      <div className="story-section-container">story</div>
    </div>
  );
}
