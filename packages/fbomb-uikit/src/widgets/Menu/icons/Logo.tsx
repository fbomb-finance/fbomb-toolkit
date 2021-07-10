import React from "react";
import styled from "styled-components";
import { Heading } from "../../../components/Heading";
import Icon from "../../../components/Svg/Icons/Logo";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Colored = styled.div`
  display: inline;
  color: ${({theme}) => theme.colors.primary};
`

const Logo: React.FC<LogoProps> = () => {
  return (
    <Wrapper>
      <Icon width="40px" mr="10px"/>
      <Heading>
        Bomb
        <Colored>Dex</Colored>
      </Heading>
    </Wrapper>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
