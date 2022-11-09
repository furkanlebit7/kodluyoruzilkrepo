import React from "react";
import { TfiReload } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../../Redux/CardSlice";
import {
  ModalBody,
  ModalHeader,
  ModalInformation,
  ModalPoint,
  ModalStyled,
  RestartButton,
} from "./Final.styled";

function Final({ status }) {
  const dispatch = useDispatch();

  const point = useSelector((state) => state.cards.point);

  return (
    <ModalStyled>
      <ModalBody>
        <ModalHeader>
          {status === "win" ? "🥳Congratulations🥳" : "😿You Lost😿"}
        </ModalHeader>
        <ModalInformation>
          Your score is <ModalPoint>{point}</ModalPoint>
        </ModalInformation>
        <RestartButton onClick={() => dispatch(restart())}>
          <TfiReload />
          Play Again
        </RestartButton>
      </ModalBody>
    </ModalStyled>
  );
}

export default Final;
