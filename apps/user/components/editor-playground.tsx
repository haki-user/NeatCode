"use client";
// import { useState } from "react";
import type { ViewUpdate } from "@uiw/react-codemirror";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import type { LanguageSupport } from "@codemirror/language";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";

const EXTENSIONS: Record<string, LanguageSupport[]> = {
  cpp: [cpp()],
  "c++": [cpp()],
  java: [java()],
  python: [python()],
};
// props
interface EditorPlaygroundProps {
  language: string;
  code: string;
  setCode: (val: string) => void;
}

export function EditorPlayground({ language, code, setCode }: EditorPlaygroundProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- do something about viewUpdate
  const handleCodeChange = (value: string, viewUpdate: ViewUpdate): void => {
    setCode(value);
  };

  return (
    <CodeMirror
      basicSetup={{ autocompletion: true }}
      extensions={[
        EXTENSIONS[language],
        EditorView.lineWrapping,
        EditorView.theme({ "&.cm-focused": { outline: "none" } }),
      ]}
      height="24.9375rem"
      onChange={handleCodeChange}
      theme="light"
      value={code}
      width="100%"
    />
  );
}
