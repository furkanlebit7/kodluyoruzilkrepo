import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchText } from "../../Redux/services/textService";

function Form() {
  const dispatch = useDispatch();

  const [paragraph, setParagraph] = useState(4);
  const [includeHTML, setIncludeHTML] = useState("text");

  useEffect(() => {
    dispatch(fetchText({ p: paragraph, i: includeHTML }));
  }, [paragraph, includeHTML]);

  const handleParagraph = (value) => {
    if (!value) {
      setParagraph(1);
    } else if (value <= 0) {
      setParagraph(1);
    } else {
      setParagraph(value);
    }
  };
  const handleIncludeHTML = (value) => {
    setIncludeHTML(value);
  };

  return (
    <div className="Form">
      <div className="form-element">
        <label>Paragraphs</label>
        <input
          type="number"
          value={paragraph}
          min="1"
          onChange={(e) => handleParagraph(e.target.value)}
        />
      </div>
      <div className="form-element">
        <label>Include HTML</label>
        <select
          value={includeHTML}
          name="includeHTML"
          onChange={(e) => handleIncludeHTML(e.target.value)}
        >
          <option value="text">No</option>
          <option value="html">Yes</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
