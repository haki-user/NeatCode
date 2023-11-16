import Navbar from "../components/Navbar";
import "./page.css";
import "./globals.css";

export default function Home() {
  return (
    <div
      className="landing-bg bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-800 w-full h-full"
      style={{
        background:
          "linear-gradient(-150deg, #222222 15%, #373737 70%, #3c4859 94%)",
      }}
    >
      <Navbar />
      <div className="flex">
        <div className="intro-container flex px-[50px] m-auto">
          <div className="intro-row flex p-[-15px]">
            <div className="w-1/2">
              <div className="ipad-container mt-[100px]">
                <div
                  className="ipad w-[414px] h-[284px] bg-white rounded-3xl rotate-[-8deg] origin-center transition-all duration-400"
                  style={{
                    boxShadow:
                      "inset 0 4px 7px 1px #ffffff, inset 0 -5px 20px rgba(173, 186, 204, 0.25), 0 2px 6px rgba(0, 21, 64, 0.14), 0 10px 20px rgba(0, 21, 64, 0.05)",
                  }}
                >
                  <div
                    className="ipad-screen flex border-solid border-2 relative top-2 rounded-[5px] m-auto"
                    style={{
                      width: "calc(100% - 38px * 2)",
                      height: "calc(100% - 8px * 2)",
                      borderColor: "#eff1f5",
                    }}
                  >
                    <div
                      className="ipad-screen-content h-full w-full flex"
                      style={{ backgroundColor: "#fafbfd" }}
                    >
                      <div className="ipad-screen-content-left w-3/4 h-full">
                        <div
                          className="ipad-apps-container p-[5px] flex"
                          style={{ backgroundColor: "#f0f4fa" }}
                        >
                          <div
                            className="ipad-app h-[55px] rounded-[5px] m-[5px]"
                            style={{
                              width: "calc(100% / 4)",
                              background: "linear-gradient(#96d1f9, #00cded)",
                              boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.08)",
                            }}
                          ></div>
                          <div
                            className="ipad-app h-[55px] rounded-[5px] m-[5px]"
                            style={{
                              width: "calc(100% / 4)",
                              background: "linear-gradient(#b9f4bc, #8dc63f)",
                              boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.08)",
                            }}
                          ></div>
                          <div
                            className="ipad-app h-[55px] rounded-[5px] m-[5px]"
                            style={{
                              width: "calc(100% / 4)",
                              background: "linear-gradient(#ffd57f, #ffb601)",
                              boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.08)",
                            }}
                          ></div>
                          <div
                            className="ipad-app border-box h-[55px] rounded-[5px] m-[5px]"
                            style={{
                              width: "calc(100% / 4)",
                              background: "linear-gradient(#ff9395, #ff5b5c)",
                              boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.08)",
                            }}
                          ></div>
                        </div>
                        <div className="ipad-list-container p-[10px]" style={{ height: "calc(100% - 80px)" }}> 
                          <ListItem fill={40} color="#98d05f" rest="rounded-t-[5px]" />
                          <ListItem fill={32} color="#fe6160" rest="border-t-0" />
                          <ListItem fill={43} color="#ffb718" rest="border-t-0" />
                          <ListItem fill={35} color="#98d05f" rest="border-t-0" />
                          <ListItem fill={23} color="#fe6160" rest="border-t-0" />
                          <ListItem fill={45} color="#98d05f" rest="border-t-0 rounded-b-[5px]" />
                        </div>
                      </div>
                      <div className="ipad-screen-content-right flex flex-col w-1/4 h-full" 
                        style={{ borderLeft: "1px solid #e2e8f0" }}>
                        <div className="ipad-progress-panel">
                          <div className="m-[10px] pt-[10px] h-[110px] rounded-[5px]" style={{ borderTop: "#cbd7e6 15px solid", borderBottom: "#e2e8f0 15px solid" }}>
                            <PieChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[550px] h-[306px] flex flex-col items-center justify-center m-24">
              <h1 className="text-white text-4xl font-medium">
                A New Way to Learn
              </h1>
              <p className="text-white font-normal opacity-50 mt-10 leading-7 text-center text-sm">
                LeetCode is the best platform to help you enhance your skills,
                expand your knowledge and prepare for technical interviews.
              </p>
              <button className="shadow-hover rounded-full border-solid border border-blue-b mt-7 px-3 py-[6px] text-white text-sm font-light bg-blue-b hover:bg-dark-blue-b hover:border hover:border-dark-blue-b transition-all duration-400">
                Create Account {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem:React.FC<{ fill:number, color: string, rest?:string }> = ({fill, color, rest}) => {
  return (
    <div className={"ipad-list bg-white p-[10px] border-solid border-[1px] flex justify-between "+rest} style={{ height: "calc(100% / 6)", borderColor: "#edf1f7" }}>
      <div className="h-full" style={{ width: fill+"%", backgroundColor: "#e3e7ed" }}></div>
      <div className="w-[10px] h-[5px] rounded-[5px]" style={{ backgroundColor: color }}></div> 
    </div>)
};

const PieChart:React.FC = () => {
  return (
    <div className="pie-container w-[60px] h-[60px]">
      <div className="pie-circle w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: "#96d1f9" }}>
        <div className="w-full h-full translate-x-[-50%] overflow-hidden relative" style={{ backgroundColor: "transparent" }}>

        </div>
        <div className="pie-section-container w-[60px] h-[60px] translate-x-1/2 translate-y-[-150%] overflow-hidden" style={{ backgroundColor: "transparent" }}>
        <div className="pie-section w-[60px] h-[60px] rotate-[-50deg] origin-bottom-left" style={{ backgroundColor: "#b9f4bc" }}></div>
        </div>
      </div>
    </div>
  )
}
