import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";

export function ExploreCard({ bg = "v1" }: { bg: "v1" | "v2" | "v3" }): JSX.Element {
  const col: Record<string, string> = {
    v1: "from-[#00cded] to-[#96d1f9]",
    v2: "from-[#8dc63f] to-[#b9f4bc]",
    v3: "from-[#ffb601] to-[#ffd57f]",
  };
  const opacity: Record<string, string> = {
    v1: "opaity-100",
    v2: "opacity-60",
    v3: "opacity-20",
  };
  return (
    <div className="explore-card ui-w-64 ui-rounded-[1.4rem] ui-bg-white ui-shadow rotY h-[19rem]">
      <div
        className={`ui-bg-gradient-to-t ${col[bg]} h-[13.65rem] w-full rounded-t-[1.4rem] p-5 pb-0 ${opacity[bg]}`}>
        <div className={`flex ${bg === "v2" ? "flex-row-reverse justify-end" : ""} gap-2 pb-5`}>
          <div className="h-4 w-28 rounded-md bg-white opacity-50" />
          <div className={`${bg === "v2" ? "w-5" : "w-12"} h-4 rounded-md bg-white opacity-50`} />
        </div>
        <div className={`flex ${bg !== "v1" ? "flex-row-reverse justify-end" : ""} gap-4`}>
          <div className="h-11 w-11 rounded-[0.625rem] bg-white opacity-70" />
          <div className="h-11 w-36 rounded-[0.625rem] bg-white opacity-70" />
        </div>
        {bg === "v3" ? <div className="mt-5 h-11 w-11 rounded-[0.625rem] bg-white opacity-50" /> : ""}
      </div>
      <div className="relative">
        <div className="absolute m-5 mt-9 h-4 w-24 rounded-[0.625rem] bg-[#F5F6F8]" />
        <div className="absolute -top-12 right-3">
          <div className="h-[4.75rem] w-[4.75rem] rounded-full bg-white shadow">
            <div className="flex h-full w-full items-center justify-center">
              <FontAwesomeIcon color="#e6eaef" icon={faPlay} size="xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
