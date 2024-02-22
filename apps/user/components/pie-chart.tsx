import type { ReactElement } from "react";
import "./pieChart.css";

export default function PieChart(): ReactElement {
  return (
    <div className="pie-container ml-[2px] h-[60px] w-[60px]">
      <div
        className="pie-circle h-full w-full overflow-hidden rounded-full"
        style={{ backgroundColor: "#96d1f9" }}>
        <div
          className="relative h-full w-full translate-x-[-50%] overflow-hidden"
          style={{ backgroundColor: "transparent" }}
        />
        <div
          className="pie-section-container h-[60px] w-[60px] translate-x-1/2 
            translate-y-[-150%] overflow-hidden"
          style={{ backgroundColor: "transparent" }}>
          <div
            className="pie-section h-[60px] w-[60px] origin-bottom-left 
              rotate-[-50deg]"
            style={{ backgroundColor: "#b9f4bc" }}
          />
        </div>
      </div>
    </div>
  );
}
