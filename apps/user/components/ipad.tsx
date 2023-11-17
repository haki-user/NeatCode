import PieChart from "./pie-chart";

function ListItem({
  color,
  fill,
  rest,
}: {
  fill: number;
  color: string;
  rest?: string;
}): JSX.Element {
  return (
    <div
      className={`ipad-list bg-white p-[10px] border-solid border-[1px] flex 
        justify-between ${rest}`}
      style={{ height: "calc(100% / 6)", borderColor: "#edf1f7" }}
    >
      <div
        className="h-[5px] rounded-[5px]"
        style={{ width: `${fill}%`, backgroundColor: "#e3e7ed" }}
      />
      <div
        className="w-[10px] h-[5px] rounded-[5px]"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default function Ipad(): JSX.Element {
  return (
    <div className="ipad-container mt-[100px]">
      <div
        className="ipad w-[414px] h-[284px] bg-white rounded-[30px] rotate-[-8deg] transition-all duration-400"
        style={{
          boxShadow:
            "inset 0 4px 7px 1px #ffffff, inset 0 -5px 20px rgba(173, 186, 204, 0.25), 0 2px 6px rgba(0, 21, 64, 0.14), 0 10px 20px rgba(0, 21, 64, 0.05)",
          transformOrigin: "50% 50%",
        }}
      >
        <div
          className="ipad-screen flex border-solid border-2 
                        relative top-2 rounded-[5px] m-auto"
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
                  className="ipad-app h-[55px] rounded-[5px] m-[5px]
                                mb-[12px]"
                  style={{
                    width: "calc(100% / 4)",
                    background: "linear-gradient(#96d1f9, #00cded)",
                    boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.08)",
                  }}
                />
                <div
                  className="ipad-app h-[55px] rounded-[5px] 
                                m-[5px]"
                  style={{
                    width: "calc(100% / 4)",
                    background: "linear-gradient(#b9f4bc, #8dc63f)",
                    boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.08)",
                  }}
                />
                <div
                  className="ipad-app h-[55px] rounded-[5px] 
                                m-[5px]"
                  style={{
                    width: "calc(100% / 4)",
                    background: "linear-gradient(#ffd57f, #ffb601)",
                    boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.08)",
                  }}
                />
                <div
                  className="ipad-app border-box h-[55px] 
                                rounded-[5px] m-[5px]"
                  style={{
                    width: "calc(100% / 4)",
                    background: "linear-gradient(#ff9395, #ff5b5c)",
                    boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.08)",
                  }}
                />
              </div>
              <div
                className="ipad-list-container p-[10px]"
                style={{ height: "calc(100% - 80px)" }}
              >
                <ListItem color="#98d05f" fill={40} rest="rounded-t-[5px]" />
                <ListItem color="#fe6160" fill={32} rest="border-t-0" />
                <ListItem color="#ffb718" fill={43} rest="border-t-0" />
                <ListItem color="#98d05f" fill={35} rest="border-t-0" />
                <ListItem color="#fe6160" fill={23} rest="border-t-0" />
                <ListItem
                  color="#98d05f"
                  fill={45}
                  rest="border-t-0 rounded-b-[5px]"
                />
              </div>
            </div>
            <div
              className="ipad-screen-content-right flex flex-col 
                            w-1/4 h-full"
              style={{ borderLeft: "1px solid #e2e8f0" }}
            >
              <div className="ipad-progress-panel">
                <div
                  className="m-[10px] pt-[10px] h-[110px] 
                                rounded-[5px]"
                  style={{
                    borderTop: "#cbd7e6 15px solid",
                    borderBottom: "#e2e8f0 15px solid",
                  }}
                >
                  <PieChart />
                </div>
              </div>
              <div
                className="ipad-panel-list w-full h-full 
                              p-[10px]"
              >
                <div
                  className="ipad-panel-list-item w-full h-[5px] 
                                mb-2 rounded-[5px]"
                  style={{ backgroundColor: "#e3e7ed" }}
                />
                <div
                  className="ipad-panel-list-item w-[60%] h-[5px] 
                                mb-2 rounded-[5px]"
                  style={{ backgroundColor: "#e3e7ed" }}
                />
                <div
                  className="ipad-panel-list-item w-[70%] h-[5px] 
                                mb-2 rounded-[5px]"
                  style={{ backgroundColor: "#e3e7ed" }}
                />
                <div
                  className="ipad-panel-list-item w-[30%] h-[5px] 
                                mb-2 rounded-[5px]"
                  style={{ backgroundColor: "#e3e7ed" }}
                />
                <div className="h-[21px] leading-[21px]" />
                <div
                  className="ipad-panel-list-item w-[80%] h-[5px] 
                                mb-2 rounded-[5px]"
                  style={{ backgroundColor: "#e3e7ed" }}
                />
                <div
                  className="ipad-panel-list-item w-[70%] h-[5px] 
                                mb-2 rounded-[5px]"
                  style={{ backgroundColor: "#e3e7ed" }}
                />
                <div
                  className="ipad-panel-list-item w-[30%] h-[5px] 
                                mb-2 rounded-[5px]"
                  style={{ backgroundColor: "#e3e7ed" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
