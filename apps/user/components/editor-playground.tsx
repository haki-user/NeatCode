"use client"; // remove??
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
// To fix this error, you need to ensure that all props you pass to components in a file that uses client-side rendering are serializable. If you need to pass a function as a prop, consider using a context or a state management library like Redux or Zustand.
export function EditorPlayground({ language, code, setCode }: EditorPlaygroundProps): JSX.Element {
  const handleCodeChange = (value: string): void => {
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
      height="22.4375rem"
      onChange={handleCodeChange}
      theme="light"
      value={code}
      width="100%"
    />
  );
}
