import React from "react";
import {
  AiFillCode,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { Author, FooterStyled, Social, Socials } from "./Footer.styled";

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
            "https://github.com/furkanlebit7/kodluyoruzilkrepo/tree/main/REDUX/suffergame"
          }
          target="_blank"
        >
          <AiFillCode />
        </Social>
      </Socials>
      <Author>Created by Furkan Lebit</Author>
    </FooterStyled>
  );
}

export default Footer;
