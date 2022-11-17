import React from "react";
import { useDispatch } from "react-redux";
import { helpMe } from "../../Redux/MarkdownSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <h1>Markdown Previewer</h1>
      <div className="help-button" onClick={() => dispatch(helpMe())}>
        ?
      </div>
    </div>
  );
}

export default Header;
