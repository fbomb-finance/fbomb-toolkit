import React, { useEffect } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { Wordmark } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { Text } from "../../..";
import { LogoIcon as LogoWithText } from "../icons";
import TextTransition from "react-text-transition"

interface Props {
  isDark?: boolean;
  href: string;
  text?: string;
  show: boolean;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 12px;
  margin-bottom: 4px;

  .mobile-icon {
    width: 32px;
    /* ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    } */
    display: none;
  }
  .wordmark {
    width: 72px;
    display: block;
    /* ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    } */
  }
  .custom-text {
    line-height: 1;
    margin-left: 6px;
    margin-top: 2px;
    font-weight: 200;
    font-size: 26px;
    color: ${({theme}) => theme.colors.primary}
  }

`;

const Logo: React.FC<Props> = ({ isDark, href, text, show }) => {
  const theme = useTheme()
  const isAbsoluteUrl = href.startsWith("http");

  const innerLogo = (
    <>
      <Wordmark className="wordmark" darkMode={theme.isDark} style={{
        opacity: show ? '1' : '0',
        transition: 'opacity 200ms'
      }}/>
      {<TextTransition text={text ?? ' '} className="custom-text"/>}
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Bomb home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Bomb home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
