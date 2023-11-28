import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [text, setText] = useState("");
  return (
    <div className="main-container">
      <div className="left-container">
        <textarea
          rows="35"
          placeholder="Write notes here..../"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <ReactMarkdown className="right-container">{text}</ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;
