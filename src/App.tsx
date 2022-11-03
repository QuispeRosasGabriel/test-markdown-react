import { useState } from "react";

function App() {
  const [textInformation, setTextInformation] = useState<string>("");

  const handleTextChanges = (value: string) =>
    setTextInformation(
      value
        .split("\n")
        .map((line: string) => {
          if (line.lastIndexOf("---") === 0)
            return `<hr />${line.split("---")[1]}`;

          const lastIndexOfHashtag = line.lastIndexOf("#");
          const checkString = line.slice(0, lastIndexOfHashtag);

          if (
            lastIndexOfHashtag > 0 &&
            checkString.length - checkString.replaceAll("#", "").length === 0
          )
            return line;

          return `<h${lastIndexOfHashtag + 1}>${line.slice(
            lastIndexOfHashtag + 1
          )}</h${lastIndexOfHashtag + 1}>`;
        })
        .join("<br />")
    );

  return (
    <div>
      <textarea
        onChange={(e: any) => handleTextChanges(e.target.value)}
        rows={5}
      />
      <br />
      <div dangerouslySetInnerHTML={{ __html: textInformation }}></div>
    </div>
  );
}

export default App;
