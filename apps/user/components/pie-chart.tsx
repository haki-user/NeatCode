import type { ReactElement } from "react";
import "./pieChart.css"

export default function PieChart(): ReactElement {
  return (
    <div className="pie-container w-[60px] h-[60px] ml-[2px]">
      <div
        className="pie-circle w-full h-full rounded-full overflow-hidden"
        style={{ backgroundColor: "#96d1f9" }}
      >
        <div
          className="w-full h-full translate-x-[-50%] overflow-hidden relative"
          style={{ backgroundColor: "transparent" }}
        />
        <div
          className="pie-section-container w-[60px] h-[60px] translate-x-1/2 
            translate-y-[-150%] overflow-hidden"
          style={{ backgroundColor: "transparent" }}
        >
          <div
            className="pie-section w-[60px] h-[60px] rotate-[-50deg] 
              origin-bottom-left"
            style={{ backgroundColor: "#b9f4bc" }}
          />
        </div>
      </div>
    </div>
  );
}
