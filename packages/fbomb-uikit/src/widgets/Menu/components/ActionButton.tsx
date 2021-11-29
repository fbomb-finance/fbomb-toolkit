import React from "react";
import styled from "styled-components";
import Logo from "../../../components/Svg/Icons/Logo";

interface Props {
  isDark?: boolean;
  href?: string;
}

const StyledButton = styled.button`
  padding: 1px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.primary};
  transform: translateY(-8px);
  border: 4px solid ${({theme}) => theme.colors.backgroundAlt};
  box-shadow: 0 0 0 2px ${({theme}) => theme.colors.secondary};
  cursor: pointer;

  svg {
    transform: translateY(2px);
  }
`

const ActionButton = React.forwardRef<HTMLButtonElement, React.HTMLProps<HTMLButtonElement>>((props, ref) => (
    <StyledButton ref={ref}>
      <Logo invertColor width="38px"/>
    </StyledButton>
  )
)

export default ActionButton