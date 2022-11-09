import React, { useState } from "react";
import { Card, ImageCard, QuestionCard, StyledCards } from "./Cards.styled";
import { FaQuestion } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { open, match, close, unCorrect } from "../../Redux/CardSlice";

function Cards() {
  const dispatch = useDispatch();

  const [compareState, setCompareState] = useState([]);
  const [checking, setChecking] = useState(false);

  const cards = useSelector((state) => state.cards.cards);

  const compare = () => {
    if (compareState[0].name === compareState[1].name) {
      dispatch(match(compareState));
      setCompareState([]);
      setTimeout(() => {
        setChecking(false);
      }, 500);
    } else {
      setTimeout(() => {
        compareState.forEach((compare) => {
          dispatch(close(compare));
          setChecking(false);
        });
        dispatch(unCorrect());
      }, 1000);
      setCompareState([]);
    }
  };

  const handleClick = (framework) => {
    compareState.push(framework);
    dispatch(open(framework));
    if (compareState.length === 2) {
      setChecking(true);
      compare();
    }
  };

  return (
    <StyledCards>
      {cards.map((framework) => (
        <Card
          checking={checking}
          onClick={() => handleClick(framework)}
          isOpen={framework.isOpen}
          key={framework.id}
        >
          <QuestionCard isOpen={framework.isOpen}>
            <FaQuestion />
          </QuestionCard>
          <ImageCard isOpen={framework.isOpen}>
            <img
              className="iconImage"
              src={
                "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" +
                framework.name +
                ".png"
              }
              alt="error"
            />
          </ImageCard>
        </Card>
      ))}
    </StyledCards>
  );
}

export default Cards;

//  transition: 0.6s;
//   transform-style: preserve-3d;

//   &:hover {
//     transform: rotateY(180deg);
//   }
