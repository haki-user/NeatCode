"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faPlay,
  faTrophy,
  faUsers,
  faBriefcase,
  faBuilding,
  faChevronRight,
  faCode,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { EditorPlayground } from "@/components/editor-playground";
// import { ExploreCard } from "@neatcode/ui";

export default function Body(): JSX.Element {
  const [activeTopicId, setActiveTopicId] = useState<number>(0);
  return (
    <div>
      <div className="explore-section-container min-h-[400px] mt-[20px]">
        {/* <div className="explore-section"> */}
        <div className="explore-section-content flex w-full px-[140px]">
          <div className="w-[596px] h-full flex flex-col items-end pr-8">
            <div className="w-full h-24 flex justify-end items-center text-[#1da09c]">
              <h2 className="text-2xl mr-6 font-normal">Start Exploring</h2>
              <div className="w-16 h-16">
                <div className="relative w-[38px] h-full mx-auto">
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#4db6ac] to-[#00796b] rounded-[0.625rem] text-[#34a297]" />
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#4db6ac] to-[#00796b] rounded-[0.625rem] text-[#34a297] rotate-[60deg]" />
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#4db6ac] to-[#00796b] rounded-[0.625rem] text-[#34a297] -rotate-[60deg]" />
                  <div className="absolute top-[12px] left-[1px]  w-9 h-9 bg-white rounded-full pl-[6px] pt-[5px] ">
                    <FontAwesomeIcon
                      color="#34a297"
                      height={18}
                      icon={faGraduationCap}
                      width={24}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="w-full text-right text-[0.9375rem] font-normal opacity-50 leading-7 pr-9">
              Explore is a well-organized tool that helps you get the most out
              of NeatCode by providing structure to guide your progress towards
              the next step in your programming career.
            </p>
            <div className="w-full h-10 ">
              <p className="text-[0.9375rem] font-normal text-[#1890ff] pr-9 pt-4 flex justify-end items-center">
                <span className="text-sm">Get Started &nbsp;</span>
                <FontAwesomeIcon icon={faChevronRight} width={5} />
              </p>
            </div>
          </div>
          <div className="relative explore-cards-container w-1/2 h-full transition-all delay-[400ms]">
            <div className="absolute scale-50">
              <div className="animate-float">
                <ExploreCard v="v3" />
              </div>
            </div>
            <div className="absolute scale-75 left-20">
              <div className="animate-float animation-delay-[800ms]">
                <ExploreCard v="v2" />
              </div>
            </div>
            <div className="absolute left-44 animate-float animation-delay-[1600ms]">
              <ExploreCard v="v1" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="feature-section-container w-[73.125rem] h-80 mx-auto px-1 flex">
        <div className="w-1/2 h-full border-r-2 border-r-white px-12">
          <div className="relative w-full h-[5.785rem] flex items-center">
            <div className="absolute left-20">
              <CustomIcons icon={faTrophy} v="v4" />
            </div>
            <div className="absolute left-10">
              <CustomIcons icon={faUsers} v="v3" />
            </div>
            <div className="absolute">
              <div className="w-16 h-16">
                <div className="relative w-[38px] h-full mx-auto">
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#2196f3] to-[#4fc3f7] rounded-[0.5rem]" />
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#2196f3] to-[#4fc3f7] rounded-[0.5rem] rotate-[60deg]" />
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#2196f3] to-[#4fc3f7] rounded-[0.5rem] -rotate-[60deg]" />
                  <div className="absolute top-[12px] left-[1px]  w-9 h-9 bg-white rounded-full pl-[0.1rem] pt-[5px] ">
                    <b className="text-[#259af3] font-TypoRound text-sm text-center">
                      3200
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mt-2.5 mb-5 font-NimbusSans text-[1.375rem] text-[#1890ff] font-medium">
              Questions, Community & Contests
            </h2>
            <p className="text-[0.9375rem] leading-[1.9rem] tracking-normal opacity-30 font-normal">
              Over 3200 questions for you to practice. Come and join one of the
              largest tech communities with hundreds of thousands of active
              users and participate in our contests to challenge yourself and
              earn rewards.
            </p>
          </div>
          <div className="w-full text-[#1890ff] mt-4">
            <p className="flex items-center text-[0.9375rem] font-normal">
              <span>View Questions &nbsp;</span>
              <FontAwesomeIcon icon={faChevronRight} width={5} />
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full px-12">
          <div className="relative w-full h-[5.785rem] flex items-center">
            <div className="absolute ml-10">
              <CustomIcons icon={faBuilding} v="v6" />
            </div>
            <div className="absolute">
              <CustomIcons icon={faBriefcase} v="v5" />
            </div>
          </div>
          <div>
            <h2 className="mt-2.5 mb-5 font-NimbusSans text-[1.375rem] text-[#b7892b] font-medium">
              Companies & Candidates
            </h2>
            <p className="text-[0.9375rem] leading-[1.9rem] tracking-normal opacity-30 font-normal">
              Not only does LeetCode prepare candidates for technical
              interviews, we also help companies identify top technical talent.
              From sponsoring contests to providing online assessments and
              training, we offer numerous services to businesses.
            </p>
          </div>
          <div className="w-full text-[#1890ff] mt-4">
            <p className="flex text-[0.9375rem] items-center font-normal">
              <span>Business Opportunities &nbsp;</span>
              <FontAwesomeIcon icon={faChevronRight} width={5} />
            </p>
          </div>
        </div>
      </div>
      <div className="developer-section-container lg:w-[73.125rem] mx-auto px-2.5">
        <DeveloperSection
          activeTopicId={activeTopicId}
          setActiveTopicId={setActiveTopicId}
        />
      </div>
      <div className="story-section-container">
        <StorySection />
      </div>
    </div>
  );
}

export function ExploreCard({
  v = "v1",
}: {
  v: "v1" | "v2" | "v3";
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
    <div className="explore-card w-64 h-[19rem] rounded-[1.4rem] bg-white shadow rotY">
      <div
        className={`bg-gradient-to-t ${col[v]} w-full h-[13.65rem] rounded-t-[1.4rem] p-5 pb-0 ${opacity[v]}`}
      >
        <div
          className={`flex ${
            v === "v2" ? "flex-row-reverse justify-end" : ""
          } pb-5 gap-2`}
        >
          <div className="w-28 h-4 bg-white opacity-50 rounded-md" />
          <div
            className={`${
              v === "v2" ? "w-5" : "w-12"
            } h-4 bg-white opacity-50 rounded-md`}
          />
        </div>
        <div
          className={`flex ${
            v !== "v1" ? "flex-row-reverse justify-end" : ""
          } gap-4`}
        >
          <div className="w-11 h-11 bg-white opacity-70 rounded-[0.625rem]" />
          <div className="w-36 h-11 bg-white opacity-70 rounded-[0.625rem]" />
        </div>
        {v === "v3" ? (
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

function CustomIcons({
  v,
  icon = faGraduationCap,
}: {
  v: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7";
  icon: IconDefinition;
}): JSX.Element {
  const bg = {
    v1: "from-[#4db6ac] to-[#00796b] ",
    v2: "from-[#2196f3] to-[#4fc3f7] ",
    v3: "from-[#cddc39] to-[#8bc34a] ",
    v4: "from-[#ffeb3b] to-[#fbc02d] ",
    v5: "from-[#e6ce6a] to-[#b7892b] ",
    v6: "from-[#e0e0e0] to-[#bdbdbd] ",
    v7: "from-[#f4511e] to-[#b71c1c] ",
  };
  const colors = {
    v1: "#34a297",
    v2: "#259af3",
    v3: "#7cb342",
    v4: "#ffb300",
    v5: "#b7892b",
    v6: "#9e9e9e",
    v7: "#34a297",
  };
  return (
    <div className="w-16 h-16">
      <div className="relative w-[38px] h-full mx-auto">
        <div
          className={`absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br ${bg[v]} rounded-[0.5rem]`}
        />
        <div
          className={`absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br ${bg[v]} rounded-[0.5rem] rotate-[60deg]`}
        />
        <div
          className={`"absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br ${bg[v]} rounded-[0.5rem] -rotate-[60deg]`}
        />
        <div className="absolute top-[12px] left-[1px]  w-9 h-9 bg-white rounded-full pl-[6px] pt-[5px] ">
          <FontAwesomeIcon
            color={colors[v]}
            height={18}
            icon={icon}
            width={24}
          />
        </div>
      </div>
    </div>
  );
}

function DeveloperSection({
  activeTopicId,
  setActiveTopicId,
}: {
  activeTopicId: number;
  setActiveTopicId: (id: number) => void;
}): JSX.Element {
  const listData = [
    { id: 0, name: "Linked List" },
    { id: 1, name: "Binary Tree" },
    { id: 2, name: "Fibonacci" },
  ];
  // const [activeId, setActiveId] = useState<number>(1);
  return (
    <div className="w-[83.3333%] mx-auto  mt-20  pt-3">
      <div className="w-full flex flex-col items-center">
        <CustomIcons icon={faCode} v="v1" />
        <h2 className="mt-2.5 mb-5 font-NimbusSans text-[1.375rem] text-[#1da09c] font-medium">
          Developer
        </h2>
        <p className="text-center text-[0.9375rem] leading-[1.9rem] tracking-normal opacity-30 font-normal max-w-[37.5rem] m-auto">
          We now support 14 popular coding languages. At our core, LeetCode is
          about developers. Our powerful development tools such as Playground
          help you test, debug and even write your own projects online.
        </p>
      </div>
      <div className="playground-demo w-full flex mt-[1.875rem]">
        <div className="editor w-[calc(100%-12.5rem)] bg-[#ecf0f1] rounded-[0.313rem] border-[1px] border-[#dddddd] overflow-hidden">
          <EditorDemo topic={listData[activeTopicId].name} />
        </div>
        <div className="list w-[12.5rem] ml-5 text-sm font-normal font-NimbusSans">
          <ul className="w-full">
            {listData.map((topic) => {
              return (
                <button
                  className={`w-full h-[2.625rem] px-2.5 py-[0.688rem] text-left ${
                    activeTopicId === topic.id
                      ? "bg-white shadow rounded-[0.313rem] text-[#1da09c]"
                      : "text-[#1890ff] hover:text-[#3fbbff]"
                  } `}
                  key={topic.id}
                  onClick={() => {
                    setActiveTopicId(topic.id);
                  }}
                  type="button"
                >
                  <FontAwesomeIcon className="pt-1" icon={faCode} width={15} />
                  &nbsp;{topic.name}
                </button>
              );
            })}
          </ul>
          <div className="w-full border-t-[1px] border-[#dddddd] mt-2.5 py-5 px-2.5 text-[#1890ff] hover:text-[#3fbbff] cursor-pointer">
            Create Playground &nbsp;
            <FontAwesomeIcon className="pt-1" icon={faChevronRight} width={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

type Language = "c++" | "java" | "python";
function EditorDemo({ topic }: { topic: string }): JSX.Element {
  const [language, setLanguage] = useState<Language>("c++");
  const [code, setCode] = useState("");
  const languages: Language[] = ["c++", "java", "python"];

  const fetchCode = async (): Promise<void> => {
    try {
      const topicPath = topic.toLowerCase().replace(" ", "-");
      const res = await fetch(`api/templates/${topicPath}/${language}`);
      const data = await res.json() as { code: string};
      setCode(data.code);
    } catch (e) {
      if (e instanceof Error) setCode(`// ${e.message}`);
    }
  };
  useEffect(() => {
    void fetchCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- no need to add fetchCode
  }, [topic, language]);

  return (
    <div className="editor w-full bg-white">
      <div className="toolbar w-full px-2.5 pt-2.5 flex justify-between items-center bg-[#ecf0f1]">
        <div className="border-[1px] border-b-0 border-[#dddddd] rounded-t overflow-hidden flex text-[0.813rem]">
          {languages.map((lang, idx) => {
            return (
              <button
                className={`min-w-[3.438rem] h-9 px-[0.313rem] py-1.5 text-center border-b-2 border-t-2 capitalize ${
                  language === lang
                    ? "bg-white border-t-[#1da09c] border-b-white "
                    : "border-t-transparent border-b-[#dddddd] hover:bg-[#fafafa] hover:text-[#333]"
                } 
                ${idx > 0 ? "border-l-2 border-r-[#dddddd]" : ""}
                `}
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                }}
                type="button"
              >
                {lang}
              </button>
            );
          })}
        </div>
        <div className="flex text-[0.813rem] mb-auto">
          <button
            className="h-[1.875rem] px-2 rounded flex bg-white hover:bg-[#e6e6e6] hover:text-[#333] items-center border-[1px] border-[#dddd] hover:border-[#adadad] mr-1.5"
            type="button"
          >
            <Image
              alt="paste icon"
              height={13}
              src="/paste-icon.svg"
              width={13}
            />
            <span className="mt-1">&nbsp; Copy</span>
          </button>
          <button
            className="h-[1.875rem] px-2 rounded  bg-[#5cb85c] hover:bg-[#449d44] flex items-center border-[1px] border-[#4cae4c] hover:border-[#398439] text-white mr-1.5"
            type="button"
          >
            <FontAwesomeIcon
              className="my-auto"
              height={13}
              icon={faPlayCircle}
              width={13}
            />
            <span className="my-1 mt-2">&nbsp; Run</span>
          </button>
          <button
            className="h-[1.875rem] px-2 rounded bg-black hover:bg-[#464646] flex items-center border-[1px] border-black text-white"
            type="button"
          >
            <Image
              alt="playground icon"
              height={14}
              src="/leetcode-playground.png"
              width={14}
            />
            <span className="mt-1">&nbsp; Playground</span>
          </button>
        </div>
      </div>
      <div className="editor w-full h-[25rem] mb-[0.0625rem]">
        <EditorPlayground code={code} language={language} setCode={setCode} />
      </div>
    </div>
  );
}

function StorySection(): JSX.Element {
  return <div>Story</div>;
}
