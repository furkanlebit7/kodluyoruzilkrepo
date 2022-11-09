import styled from "styled-components";

export const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  width: 500px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

export const ModalHeader = styled.h1`
  color: green;
`;
export const ModalInformation = styled.p`
  font-size: 1.2rem;
  margin: 30px auto;
`;
export const ModalPoint = styled.span`
  color: rgba(135, 76, 98, 0.8);
  font-weight: bold;
  text-decoration: underline;
`;

export const RestartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  background-color: rgba(135, 76, 98, 0.5);
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin: auto;

  &:hover {
    background-color: rgba(135, 76, 98, 0.7);
  }
`;
