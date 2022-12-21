import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center dark:bg-darkMain dark:text-white">
      <img src={require("../Images/others/loading.gif")} alt="laoding world" />
      <p className="text-2xl">
        <i>Loading...</i>
      </p>
    </div>
  );
};

export default Loading;
