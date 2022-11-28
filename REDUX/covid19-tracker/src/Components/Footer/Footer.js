import styled from "styled-components";
import {
  AiFillCode,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <FooterStyled>
      <Socials>
        <Social href={"https://github.com/furkanlebit7"} target="_blank">
          <AiFillGithub />
        </Social>
        <Social
          href={"https://www.linkedin.com/in/furkanlebit7/"}
          target="_blank"
        >
          <AiFillLinkedin />
        </Social>
        <Social
          href={"https://www.instagram.com/furkanlebit7/"}
          target="_blank"
        >
          <AiFillInstagram />
        </Social>
        <Social
          href={
            "https://github.com/furkanlebit7/kodluyoruzilkrepo/tree/main/REDUX/covid19-tracker"
          }
          target="_blank"
        >
          <AiFillCode />
        </Social>
      </Socials>
      <Author>Created by Furkan Lebit</Author>
      <Author>I made tihs work as a clone from Sathananthan Sabesan</Author>
      <Author>
        You can reah the real work from{" "}
        <a href="https://world19covid.web.app/" target="_blank">
          here
        </a>{" "}
      </Author>
    </FooterStyled>
  );
}

export default Footer;

export const FooterStyled = styled.div`
  width: 100%;
  height: 250px;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
  background-color: rgba(54, 212, 193, 0.7);
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
