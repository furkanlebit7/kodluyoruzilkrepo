import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeText } from "../../Redux/MarkdownSlice";
import { marked } from "marked";

function Previewer() {
  const dispatch = useDispatch();
  const textCurrent = useSelector((state) => state.markdown.textCurrent);
  const isShowingHelp = useSelector((state) => state.markdown.isShowingHelp);
  const handleChange = (value) => {
    dispatch(writeText(value));
  };

  // markdown kütüphanesi bul
  const parsedText = marked(textCurrent, { sanitize: true });
  const processedText = { __html: parsedText };
  return (
    <div className="panels">
      <textarea
        readOnly={isShowingHelp}
        className="panel-left"
        value={textCurrent}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
      <div
        className="panel-right"
        dangerouslySetInnerHTML={processedText}
      ></div>
    </div>
  );
}

export default Previewer;
