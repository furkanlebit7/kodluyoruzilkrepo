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
        <Social>
          <AiFillLinkedin />
        </Social>
        <Social>
          <AiFillInstagram />
        </Social>
        <Social>
          <AiFillCode />
        </Social>
      </Socials>
      <Author>Created by Furkan Lebit</Author>
    </FooterStyled>
  );
}

export default Footer;
