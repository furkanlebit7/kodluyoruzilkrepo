import styled from "styled-components";

export const StyledCards = styled.div`
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  position: relative;
  width: 14%;
  border-radius: 5%;
  height: 100px;
  background-color: rgba(178, 178, 178, 0.3);
  margin: 10px;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  transform: ${(props) =>
    props.isOpen ? "rotateY(180deg);" : "rotateY(0deg);"};

  pointer-events: ${(props) =>
    props.checking ? "none" : props.isOpen ? "none" : "auto;"};

  &:hover {
    background-color: rgba(178, 178, 178, 0.5);
  }
`;

export const QuestionCard = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;

  display: ${(props) => (props.isOpen ? "none" : "flex")};
`;
export const ImageCard = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;

  .iconImage {
    width: 70px;
  }
`;
