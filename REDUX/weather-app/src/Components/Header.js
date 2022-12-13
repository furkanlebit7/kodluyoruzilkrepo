import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-4xl">Weekly</h1>
      <button className="bg-gray-700 text-3xl p-2 rounded-full">🎚️</button>
    </div>
  );
};

export default Header;
