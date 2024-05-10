"use client"; // remove??
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
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
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import { Spinner } from "../components/spinner";

const EditorDemo = dynamic(() => import("../components/editor-demo").then((module) => module.EditorDemo), {
  ssr: false,
  loading: () => <Spinner />,
});

export default function Body(): JSX.Element {
  const [activeTopicId, setActiveTopicId] = useState<number>(0);
  return (
    <div>
      <div
        className="explore-section-container relative min-h-[400px] transition-all duration-[400ms] max-sm:mt-0 max-sm:min-h-[300px] max-sm:pt-0 sm:mt-[30px] sm:max-md:pt-[60px] md:mt-[80px] md:pt-[30px]"
        id="explore-section">
        <div className="explore-section-content relative m-auto mx-auto px-[50px] transition-all duration-[400ms] max-sm:px-[15px] sm:w-[750px] md:w-[970px] lg:w-[1170px]">
          <div className="mx-[-15px] flex transition-all duration-[400ms] max-sm:flex-col-reverse">
            <div className="px-[15px]  text-end transition-all duration-[400ms] sm:w-1/2">
              <div className="flex w-full text-[#1da09c] transition-all duration-[400ms] max-sm:-mt-[30px] max-sm:justify-center max-sm:py-[20px] sm:items-center sm:justify-end md:mt-[10px]">
                <h2 className="relative inline-block text-[1.375rem] font-normal transition-all duration-[400ms] sm:my-auto sm:mr-2.5">
                  Start Exploring
                </h2>
                <div className=" inline-block h-24 w-24 scale-[0.7] transition-all duration-[400ms] max-sm:hidden sm:mr-[-63px]">
                  <div className="relative mx-auto h-[87px] w-[56px] transition-all duration-[400ms]">
                    <div className="absolute h-[87px] w-[56px] rounded-[0.625rem] bg-gradient-to-br from-[#4db6ac] to-[#00796b] text-[#34a297]" />
                    <div className="absolute h-[87px] w-[56px] rotate-[60deg] rounded-[0.625rem] bg-gradient-to-br from-[#4db6ac] to-[#00796b] text-[#34a297]" />
                    <div className="absolute h-[87px] w-[56px] -rotate-[60deg] rounded-[0.625rem] bg-gradient-to-br from-[#4db6ac] to-[#00796b] text-[#34a297]" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[53px] w-[53px] rounded-full bg-white text-center">
                      <FontAwesomeIcon
                        className="mt-[14px]"
                        color="#34a297"
                        icon={faGraduationCap}
                        size="xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="m-auto max-w-[600px] text-right text-[0.9375rem] font-normal leading-7 tracking-[0.03em] opacity-50 transition-all duration-[400ms] max-sm:text-center sm:mr-[-17px]">
                Explore is a well-organized tool that helps you get the most out of NeatCode by providing
                structure to guide your progress towards the next step in your programming career.
              </p>
              <Link className="" href="/getStarted">
                <p className="mt-[15px] flex items-center text-[0.9375rem] font-normal leading-[1.813rem] text-[#1890ff] transition-all duration-[400ms] max-sm:justify-center sm:-mr-[17px] sm:justify-end">
                  Get Started &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} width={5} />
                </p>
              </Link>
            </div>
            <div className="explore-cards-container px-[15px] transition-all duration-[400ms] sm:w-1/2">
              <div className="relative ml-[auto] h-[18.75rem] w-[16.25rem] transition-all duration-[400ms] max-sm:m-auto max-sm:scale-[0.6] sm:max-md:scale-[0.8]">
                <div className="absolute h-full w-full origin-left scale-[0.6] transition-all duration-[400ms]">
                  <div className="animate-float absolute -left-[70px] transition-all duration-[400ms] lg:-left-[210px]">
                    <ExploreCard v="v3" />
                  </div>
                </div>
                <div className="absolute h-full w-full origin-left scale-[0.8] transition-all duration-[400ms]">
                  <div className="animate-float animation-delay-[800ms] absolute -left-[30px] transition-all duration-[400ms] lg:-left-[90px]">
                    <ExploreCard v="v2" />
                  </div>
                </div>
                <div className="animate-float animation-delay-[1600ms] absolute h-full w-full origin-left transition-all duration-[400ms]">
                  <ExploreCard v="v1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="feature-section-container mx-auto px-[15px] sm:-mt-[20px] sm:w-[750px] md:w-[970px] lg:w-[73.125rem]"
        id="product-section">
        <div className="-mx-[15px] flex max-sm:flex-col">
          <div className="mt-[50px] w-1/2 max-sm:mx-auto max-sm:mt-[80px] max-sm:w-full max-sm:px-[15px] sm:border-r-2 sm:border-r-white sm:px-[50px] sm:pb-[20px] sm:pt-[17px]">
            <div className="sm:-mt-[13px]">
              <div className="scale-[0.7] text-start leading-[0] max-sm:text-center sm:origin-left">
                <div className="relative z-[2] inline-block">
                  <div className="h-24 w-24">
                    <div className="relative mx-auto h-[87px] w-[56px]">
                      <div className="absolute h-[87px] w-[56px] rounded-[0.625rem] bg-gradient-to-br from-[#4fc3f7] to-[#2196f3]" />
                      <div className="absolute h-[87px] w-[56px] rotate-[60deg] rounded-[0.625rem] bg-gradient-to-br from-[#4fc3f7] to-[#2196f3]" />
                      <div className="absolute h-[87px] w-[56px] -rotate-[60deg] rounded-[0.625rem] bg-gradient-to-br from-[#4fc3f7] to-[#2196f3]" />
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[53px] w-[53px] rounded-full bg-white pt-[13px] text-center">
                        <b className="font-TypoRound relative text-center text-xl text-[#259af3]">
                          3200<span className="relative -top-[11px] right-[4px] text-base">+</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-[1] -ml-[30px] inline-block">
                  <CustomIcons icon={faUsers} v="v3" />
                </div>
                <div className="relative -ml-[30px] inline-block">
                  <CustomIcons icon={faTrophy} v="v4" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-NimbusSans mb-5 mt-2.5 text-[1.375rem] font-medium text-[#1890ff] max-sm:text-center">
                Questions, Community & Contests
              </h2>
              <p className="max-w-[600px] text-[0.9375rem] font-normal leading-[1.9em] tracking-[0.03em] text-[#333333] opacity-50 max-sm:mx-auto max-sm:text-center">
                Over 3250 questions for you to practice. Come and join one of the largest tech communities
                with hundreds of thousands of active users and participate in our contests to challenge
                yourself and earn rewards.
              </p>
            </div>
            <Link className="w-full text-[#1890ff]" href="/problems">
              <p className="mt-[15px] flex items-center text-[0.9375rem] font-normal leading-[1.9em] tracking-[0.03em] max-sm:justify-center">
                <span>View Questions &nbsp;</span>
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </p>
            </Link>
          </div>
          <div className="mt-[50px] w-1/2 max-sm:mx-auto max-sm:mt-[80px] max-sm:w-full max-sm:px-[15px] sm:px-[50px] sm:pb-[20px] sm:pt-[17px]">
            <div className="sm:-mt-[13px]">
              <div className="scale-[0.7] text-start leading-[0] max-sm:text-center sm:origin-left">
                <div className="relative z-[1] inline-block">
                  <CustomIcons icon={faBriefcase} v="v5" />
                </div>
                <div className="relative -ml-[30px] inline-block">
                  <CustomIcons icon={faBuilding} v="v6" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-NimbusSans mb-5 mt-2.5 text-[1.375rem] font-medium text-[#b7892b] max-sm:text-center">
                Companies & Candidates
              </h2>
              <p className="max-w-[600px] text-[0.9375rem] font-normal leading-[1.9em] tracking-[0.03em] text-[#333333] opacity-50 max-sm:mx-auto max-sm:text-center">
                Not only does NeatCode prepare candidates for technical interviews, we also help companies
                identify top technical talent. From sponsoring contests to providing online assessments and
                training, we offer numerous services to businesses.
              </p>
            </div>
            <Link className="w-full text-[#1890ff]" href="/bussiness">
              <p className="mt-[15px] flex items-center text-[0.9375rem] font-normal leading-[1.9em] tracking-[0.03em] max-sm:justify-center">
                <span>Business Opportunities &nbsp;</span>
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="developer-section-container mt-7 " id="developer-section">
        <DeveloperSection activeTopicId={activeTopicId} setActiveTopicId={setActiveTopicId} />
      </div>
      <div className="story-section-container mt-32 bg-white" id="story-section">
        <StorySection />
      </div>
    </div>
  );
}

export function ExploreCard({ v = "v1" }: { v: "v1" | "v2" | "v3" }): JSX.Element {
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
    <div className="explore-card rotY h-[19rem] w-64 rounded-[1.4rem] bg-white shadow">
      <div
        className={`bg-gradient-to-t ${col[v]} h-[13.65rem] w-full rounded-t-[1.4rem] p-5 pb-0 ${opacity[v]}`}>
        <div
          className={`flex ${
            v === "v2" ? "flex-row-reverse justify-end" : ""
          } gap-2 pb-5 transition-all duration-[400ms]`}>
          <div className="h-4 w-28 rounded-md bg-white opacity-50" />
          <div className={`${v === "v2" ? "w-5" : "w-12"} h-4 rounded-md bg-white opacity-50`} />
        </div>
        <div
          className={`flex ${
            v !== "v1" ? "flex-row-reverse justify-end" : ""
          } gap-4 transition-all duration-[400ms]`}>
          <div className="h-11 w-11 rounded-[0.625rem] bg-white opacity-70" />
          <div className="h-11 w-36 rounded-[0.625rem] bg-white opacity-70" />
        </div>
        {v === "v3" ? <div className="mt-5 h-11 w-11 rounded-[0.625rem] bg-white opacity-50" /> : ""}
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

function CustomIcons({
  v,
  icon = faGraduationCap,
}: {
  v: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7";
  icon: IconDefinition;
}): JSX.Element {
  const bg = {
    v1: "from-[#4db6ac] to-[#00796b]",
    v2: "from-[#4fc3f7] to-[#2196f3]",
    v3: "from-[#cddc39] to-[#8bc34a]",
    v4: "from-[#ffeb3b] to-[#fbc02d]",
    v5: "from-[#e6ce6a] to-[#b7892b]",
    v6: "from-[#e0e0e0] to-[#bdbdbd]",
    v7: "from-[#f4511e] to-[#b71c1c]",
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
    <div className="h-24 w-24">
      <div className="relative mx-auto h-[87px] w-[56px]">
        <div className={`absolute h-[87px] w-[56px] bg-gradient-to-br ${bg[v]} rounded-[0.625rem]`} />
        <div
          className={`absolute h-[87px] w-[56px] bg-gradient-to-br ${bg[v]} rotate-[60deg] rounded-[0.625rem]`}
        />
        <div
          className={`"absolute h-[87px] w-[56px] bg-gradient-to-br ${bg[v]} -rotate-[60deg] rounded-[0.625rem]`}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[53px] w-[53px] rounded-full bg-white text-center">
          <FontAwesomeIcon className="mt-[14px]" color={colors[v]} icon={icon} size="xl" />
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
  const editorRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    if (editorRef.current) {
      observer.observe(editorRef.current);
    }
  }, []);
  const [showEditor, setShowEditor] = useState(false);
  useEffect(() => {
    if (!showEditor) setShowEditor(isIntersecting);
  }, [isIntersecting, showEditor]);

  return (
    <div className="mx-auto px-4 md:w-[60.5rem] lg:w-[73.125rem]">
      <div className="mx-auto mt-12  w-full sm:w-[45rem] md:w-[83.33333%]">
        <div className="flex w-full flex-col items-center">
          <div className="scale-[0.7]">
            <CustomIcons icon={faCode} v="v1" />
          </div>
          <h2 className="font-NimbusSans mb-5 mt-2.5 text-[1.375rem] font-medium text-[#1da09c]">
            Developer
          </h2>
          <p className="m-auto max-w-[37.5rem] text-center text-[0.9375rem] font-normal leading-[1.9rem] tracking-normal opacity-30">
            We now support 14 popular coding languages. At our core, NeatCode is about developers. Our
            powerful development tools such as Playground help you test, debug and even write your own
            projects online.
          </p>
        </div>
        <div className="mb-5 mt-8 sm:hidden">
          <select
            className="h-8 w-full rounded-md border-none bg-white px-4 text-sm text-[#555555] shadow-md outline-none"
            onChange={(e) => {
              setActiveTopicId(parseInt(e.target.value));
            }}
            value={activeTopicId}>
            {listData.map((topic) => {
              return (
                <option className="" key={topic.id} value={topic.id}>
                  {topic.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="playground-demo flex w-full sm:mt-5">
          <div
            className="editor w-full overflow-hidden rounded-[0.313rem] border-[1px] border-[#dddddd] bg-[#ecf0f1] max-sm:w-full"
            ref={editorRef}>
            {showEditor ? <EditorDemo topic={listData[activeTopicId].name} /> : <Spinner />}
          </div>
          <div className="list font-NimbusSans invisible ml-5 w-[12.5rem] text-sm font-normal max-sm:hidden max-sm:w-0 sm:visible">
            <ul className="w-full">
              {listData.map((topic) => {
                return (
                  <button
                    className={`h-[2.625rem] w-full px-2.5 py-[0.688rem] text-left ${
                      activeTopicId === topic.id
                        ? "rounded-[0.313rem] bg-white text-[#1da09c] shadow"
                        : "text-[#1890ff] hover:text-[#3fbbff]"
                    } `}
                    key={topic.id}
                    onClick={() => {
                      setActiveTopicId(topic.id);
                    }}
                    type="button">
                    <FontAwesomeIcon className="pt-1" icon={faCode} width={15} />
                    &nbsp;{topic.name}
                  </button>
                );
              })}
            </ul>
            <div className="mt-2.5 w-full cursor-pointer border-t-[1px] border-[#dddddd] px-2.5 py-5 text-[#1890ff] hover:text-[#3fbbff]">
              Create Playground &nbsp;
              <FontAwesomeIcon className="pt-1" icon={faChevronRight} width={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StorySection(): JSX.Element {
  const companyLogos = [
    { name: "Facebook", link: "/images/facebook.svg" },
    { name: "Leap Motion", link: "/images/leap-motion.svg" },
    { name: "Apple", link: "/images/apple.svg" },
    { name: "Squarespace", link: "/images/squarespace.svg" },
    { name: "Jet", link: "/images/jet.svg" },
    { name: "Intel", link: "/images/intel.svg" },
    { name: "Amazon", link: "/images/amazon.svg" },
    { name: "Bank of America", link: "/images/bank-of-america.svg" },
    { name: "Pinterest", link: "/images/pinterest.svg" },
    { name: "Cisco", link: "/images/cisco.svg" },
    { name: "Stripe", link: "/images/stripe.svg" },
  ];
  return (
    <div className="story-inner sm:[750px] relative -top-[2.75rem] mx-auto  md:w-[970px] lg:w-[1170px]">
      <div className="story-content mt-20 flex flex-col items-center text-center ">
        <div className="mx-auto">
          <div className="scale-[0.7]">
            <div className="h-24 w-24">
              <div className="relative mx-auto h-[87px] w-[56px]">
                <div
                  className={`absolute h-[87px] w-[56px] rounded-[0.625rem] bg-gradient-to-br from-[#f4511e]
                  to-[#b71c1c]`}
                />
                <div
                  className={`absolute h-[87px] w-[56px] rotate-[60deg] rounded-[0.625rem] bg-gradient-to-br
                  from-[#f4511e] to-[#b71c1c]`}
                />
                <div
                  className={`"absolute h-[87px] w-[56px] -rotate-[60deg] rounded-[0.625rem] bg-gradient-to-br
                   from-[#f4511e] to-[#b71c1c]`}
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[53px] w-[53px] rounded-full bg-white text-center">
                  <Image alt="sf" className="mt-[0px]" height={52} src="/sf.png" width={52} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 mt-2.5 text-xl text-[#b71c1c]">
          <h1 className="">
            Made with &nbsp;
            <FontAwesomeIcon icon={faHeart} /> &nbsp; in SF
          </h1>
        </div>
        <div className="para">
          <p className="mx-auto max-w-[37.5rem] text-sm leading-[1.9em] tracking-[0.03em] text-[#000000a6] opacity-50">
            At LeetCode, our mission is to help you improve yourself and land your dream job. We have a
            sizable repository of interview resources for many companies. In the past few years, our users
            have landed jobs at top companies around the world.
          </p>
        </div>
        <div>
          <div className="mx-5 my-10 px-4">
            <div className="icons relative flex flex-wrap items-center justify-center gap-5 py-5">
              {companyLogos.map((company) => {
                return (
                  <div className="relative h-10 w-28" key={company.name}>
                    <Image
                      alt={company.name}
                      className="m-auto opacity-20 mix-blend-multiply brightness-0"
                      fill
                      src={company.link}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hire px-4 pb-14">
            <div className="">
              <p className="mx-auto max-w-[37.5rem] border-t-[1px] border-[#dddddd] px-2 pt-20 text-[#000000a6] opacity-50">
                If you are passionate about tackling some of the most interesting problems around, we would
                love to hear from you.
              </p>
            </div>
            <div>
              <Link className="" href="/join">
                <p className="mt-[15px] flex items-center justify-center text-[0.9375rem] font-normal leading-[1.813rem] text-[#1890ff] transition-all duration-[400ms] sm:-mr-[17px]">
                  Join Our Team &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} width={5} />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
