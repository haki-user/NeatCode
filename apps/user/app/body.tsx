export default function Body(): JSX.Element {
  return (
    <div>
      <div className="explore-section-container min-h-[400px]">
        <div className="explore-section">
          <div className="explore-section-content flex w-full h-96 bg-[#cccc]">
            <div className="w-1/2 h-full bg-red-600 flex flex-col justify-between items-end p-10">
              <div className="w-full  bg-yellow-300">
                <p>Start Exploring</p>
              </div>
              <div className="w-full bg-green-300 text-right">
                Explore is a well-organized tool that helps you get the most out
                of LeetCode by providing structure to guide your progress
                towards the next step in your programming career.
              </div>
              <div className="w-full h-10 bg-sky-600 text-right">Get Started</div>
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
