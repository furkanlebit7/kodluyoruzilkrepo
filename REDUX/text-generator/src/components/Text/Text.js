import React from "react";
import { useSelector } from "react-redux";

function Text() {
  const text = useSelector((state) => state.text.text);
  const status = useSelector((state) => state.text.status);

  return <p className="Text">{text}</p>;
}

export default Text;
