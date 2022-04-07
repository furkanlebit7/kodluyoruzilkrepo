import React from "react";

function Loading({ message }) {
  return (
    <div className="text-center mt-4">
      <h3 className="text-secondary">{message}</h3>
      <img src="https://i.gifer.com/XOsX.gif" alt="loading" width={200} />
    </div>
  );
}

export default Loading;
