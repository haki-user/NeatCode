import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";

export function ExploreCard({
  bg = "v1",
}: {
  bg: "v1" | "v2" | "v3";
}): JSX.Element {
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
    <div className="explore-card ui-w-64 h-[19rem] ui-rounded-[1.4rem] ui-bg-white ui-shadow rotY">
      <div
        className={`ui-bg-gradient-to-t ${col[bg]} w-full h-[13.65rem] rounded-t-[1.4rem] p-5 pb-0 ${opacity[bg]}`}
      >
        <div
          className={`flex ${
            bg === "v2" ? "flex-row-reverse justify-end" : ""
          } pb-5 gap-2`}
        >
          <div className="w-28 h-4 bg-white opacity-50 rounded-md" />
          <div
            className={`${
              bg === "v2" ? "w-5" : "w-12"
            } h-4 bg-white opacity-50 rounded-md`}
          />
        </div>
        <div
          className={`flex ${
            bg !== "v1" ? "flex-row-reverse justify-end" : ""
          } gap-4`}
        >
          <div className="w-11 h-11 bg-white opacity-70 rounded-[0.625rem]" />
          <div className="w-36 h-11 bg-white opacity-70 rounded-[0.625rem]" />
        </div>
        {bg === "v3" ? (
          <div className="w-11 h-11 bg-white opacity-50 rounded-[0.625rem] mt-5" />
        ) : (
          ""
        )}
      </div>
      <div className="relative">
        <div className="absolute w-24 h-4 bg-[#F5F6F8] m-5 mt-9 rounded-[0.625rem]" />
        <div className="absolute -top-12 right-3">
          <div className="w-[4.75rem] h-[4.75rem] rounded-full bg-white shadow">
            <div className="w-full h-full flex justify-center items-center">
              <FontAwesomeIcon color="#e6eaef" icon={faPlay} size="xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
