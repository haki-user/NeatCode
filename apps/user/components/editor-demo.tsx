import Image from "next/image";
import useSWRImmutable from "swr/immutable";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { EditorPlayground } from "@/components/editor-playground";

const fetcher = (...args: Parameters<typeof fetch>): Promise<{ code: string }> =>
  fetch(...args).then((res) => res.json() as Promise<{ code: string }>);

type Language = "c++" | "java" | "python";
export function EditorDemo({ topic }: { topic: string }): JSX.Element {
  const [language, setLanguage] = useState<Language>("c++");
  const [code, setCode] = useState("");
  const languages: Language[] = ["c++", "java", "python"];

  const topicPath = topic.toLowerCase().replace(" ", "-");
  const { data, error, isLoading } = useSWRImmutable<{ code: string }, Error>(
    `/api/templates/${topicPath}/${encodeURIComponent(language)}`,
    fetcher
  );
  useEffect(() => {
    if (!error && data) setCode(data.code);
  }, [data, error]);

  return (
    <div className="editor h-[400px] w-full bg-white">
      {isLoading ? (
        <p className="flex h-full w-full items-center justify-center bg-[#ecf0f1] text-[#3c4859]">
          Loading Playground...
        </p>
      ) : (
        <>
          <div className="toolbar flex w-full h-10 items-center justify-between bg-[#ecf0f1] px-[5px] pt-[5px]">
            <div className="flex overflow-hidden rounded-t border-[1px] border-b-0 border-[#dddddd] text-[0.813rem]">
              {languages.map((lang, idx) => {
                return (
                  <button
                    className={`h-9 min-w-[3.438rem] border-b-2 border-t-2 px-[0.313rem] py-1.5 text-center capitalize ${
                      language === lang
                        ? "border-b-white border-t-[#1da09c] bg-white "
                        : "border-b-[#dddddd] border-t-transparent hover:bg-[#fafafa] hover:text-[#333]"
                    } ${idx > 0 ? "border-l-2 border-r-[#dddddd]" : ""}`}
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                    }}
                    type="button">
                    {lang}
                  </button>
                );
              })}
            </div>
            <div className="mb-auto flex text-[0.813rem]">
              <button
                className="mr-1.5 flex h-[1.875rem] items-center rounded border-[1px] border-[#dddd] bg-white px-2 hover:border-[#adadad] hover:bg-[#e6e6e6] hover:text-[#333]"
                type="button">
                <Image alt="paste icon" height={13} src="/paste-icon.svg" width={13} />
                <span className="mt-1">&nbsp; Copy</span>
              </button>
              <button
                className="mr-1.5 flex h-[1.875rem]  items-center rounded border-[1px] border-[#4cae4c] bg-[#5cb85c] px-2 text-white hover:border-[#398439] hover:bg-[#449d44]"
                type="button">
                <FontAwesomeIcon className="my-auto" height={13} icon={faPlayCircle} width={13} />
                <span className="my-1 mt-2">&nbsp; Run</span>
              </button>
              <button
                className="flex h-[1.875rem] items-center rounded border-[1px] border-black bg-black px-2 text-white hover:bg-[#464646]"
                type="button">
                <Image alt="playground icon" height={14} src="/leetcode-playground.png" width={14} />
                <span className="mt-1">&nbsp; Playground</span>
              </button>
            </div>
          </div>
          <div className="editor mb-[0.0625rem] w-full">
            <EditorPlayground code={code} language={language} setCode={setCode} />
          </div>
        </>
      )}
    </div>
  );
}
