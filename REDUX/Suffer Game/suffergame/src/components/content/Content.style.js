import styled from "styled-components";

export const GameArea = styled.div`
  margin: 20px auto;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
`;

export const Scoreboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Score = styled.p`
  display: flex;
  font-weight: bold;
  font-size: 1.05rem;
`;
export const ScoreSpan = styled.span`
  margin-left: 7px;
  color: ${(props) => props.color};
`;
export const ReloadGame = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  background-color: rgba(135, 76, 98, 0.5);
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const Information = styled.p`
  font-size: 0.85rem;
  margin-top: 10px;
  color: gray;
`;
export const InfoSpan = styled.span`
  color: ${(props) => props.color};
  font-weight: bold;
  filter: blur(0px);
`;
