import React from "react";
import Card from "./Card";

const Weekly = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      <div className="flex items-center justify-between w-full mt-5 flex-wrap">
        {cards.map((c) => (
          <Card key={c} />
        ))}
      </div>
    </div>
  );
};

export default Weekly;
