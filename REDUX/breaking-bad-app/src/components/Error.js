import React from "react";

function Error({ message }) {
  return (
    <div style={{ padding: "10px", color: "purple", fontSize: "25px" }}>
      Error = {message}
    </div>
  );
}

export default Error;
