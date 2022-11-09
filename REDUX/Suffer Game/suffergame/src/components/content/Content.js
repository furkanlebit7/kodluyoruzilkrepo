import React from "react";

import { TfiReload } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../../Redux/CardSlice";
import Cards from "./Cards";

import {
  GameArea,
  Information,
  InfoSpan,
  ReloadGame,
  Score,
  Scoreboard,
  ScoreSpan,
} from "./Content.style";

function Content() {
  const dispatch = useDispatch();

  const point = useSelector((state) => state.cards.point);

  return (
    <GameArea>
      <Scoreboard>
        <Score>
          Your Score: <ScoreSpan color="palevioletred"> {point}</ScoreSpan>
        </Score>
        <ReloadGame onClick={() => dispatch(restart())}>
          <TfiReload />
          Reload Game
        </ReloadGame>
      </Scoreboard>
      <Information>
        Your start score is 200. Each correct gives{" "}
        <InfoSpan color="green">50</InfoSpan> points, each wrong takes{" "}
        <InfoSpan color="red">10</InfoSpan> points.
      </Information>
      <Cards />
    </GameArea>
  );
}

export default Content;
