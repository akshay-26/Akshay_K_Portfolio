import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

import {AiOutlineFilePdf} from 'react-icons/ai'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {GiAbstract049} from 'react-icons/gi'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <AiOutlineFilePdf size="3rem" />
         <LinkTitle></LinkTitle>
         <LinkItem href="https://drive.google.com/file/d/147N-oV11qGRk4dz8ddb2d5AuR7E7IHUx/view?usp=sharing2">Resume</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <HiOutlineMailOpen size="3rem" />
         <LinkTitle></LinkTitle>
         <LinkItem href="mailto:akshaykulkarni.bk20@gmail.com">akshaykulkarni.bk20@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <GiAbstract049 size ="1.7rem"/>
          <Slogan>Changing world one program at a time</Slogan><GiAbstract049 size ="1.7rem"/>
        </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/akshay-26" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/akshay-kulkarni-a1888773" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagam.com/akshaykulkarni_" target="_blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
