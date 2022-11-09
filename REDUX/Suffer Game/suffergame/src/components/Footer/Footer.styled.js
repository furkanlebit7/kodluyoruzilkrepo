import styled from "styled-components";

export const FooterStyled = styled.div`
  width: 100%;
  height: 250px;
  background-color: rgba(135, 76, 98, 0.5);
  padding: 30px;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: black;
  margin: 20px 10px;
  border-radius: 50%;
  background-color: white;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    font-size: 2rem;
  }
`;
export const Author = styled.h5`
  font-family: cursive;
`;
