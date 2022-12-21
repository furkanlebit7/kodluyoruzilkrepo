import React from "react";

const Error = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center dark:bg-darkMain dark:text-white">
      <img src={require("../Images/others/error.png")} alt="error world" />
      <p className="text-2xl">
        <i>Error</i>
      </p>
    </div>
  );
};

export default Error;
