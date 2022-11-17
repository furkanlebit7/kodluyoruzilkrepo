import styled from "styled-components";

export const FooterStyled = styled.div`
  width: 100%;
  height: 250px;
  background-color: #ffdd67;
  padding: 30px;
  margin-top: 50px;
  text-align: center;
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
export const Author = styled.h3`
  margin-top: 20px;
  font-family: cursive;
`;
