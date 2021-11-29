import { throttle } from "lodash";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MenuEntry } from "..";
import { Flex, useTooltip } from "../../..";
import ThemeSwitcher from "./ThemeSwitcher";

interface BombMenuProps {
  toggleTheme: (isDark: boolean) => void;
  links: MenuEntry[]
}

interface BombMenuRefs {
  bombMenu: React.ReactNode, 
  bombMenuRef: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
  bombMenuVisible: boolean
}

const StyledLink = styled(Link)<{$isActive?: boolean}>`
  display: block;
  padding: 4px 12px;
  font-size: 14pt;
  font-weight: ${({$isActive}) => $isActive ? '600' : '300'};
  line-height: 1.1;
  width: 100px;
  padding: 0 0 12px 12px;

  text-decoration: ${({$isActive}) => $isActive ? 'underline' : 'none'};
  text-decoration-thickness: 2px;
  text-decoration-color: ${({theme}) => theme.colors.primary};
`

const Divider = styled.span`
  width: 100%;
  height: 1px;
  position: relative;
  content: '';
  width: 75%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({theme}) => theme.colors.border};
  margin: 12px 0 12px 0;
`

const useBombMenu: (options: BombMenuProps) => BombMenuRefs = ({
  toggleTheme,
  links
}) => {
  const location = useLocation();
  
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const updateWidth = throttle(() => {
      setWindowWidth(window.innerWidth)
    }, 200)

    updateWidth()

    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  const {tooltip: bombMenu, targetRef: bombMenuRef, tooltipVisible: bombMenuVisible} = useTooltip(
    (
      <Flex flexDirection="column">
        <Flex flexWrap="wrap" maxWidth="300px" paddingTop="8px">
          {links.map(link => {
            return link.items ? (
              link.items.map(item => (
                <StyledLink to={item.href} $isActive={link?.items?.some((item) => item.href === location.pathname)}>{item.label}</StyledLink>
              ))
            ) : (
              <StyledLink to={link.href ?? ''} $isActive={link.href === location.pathname}>{link.label}</StyledLink>
            )
          })}
        </Flex>
        <Divider/>
        <Flex justifyContent="center">
          <ThemeSwitcher isDark toggleTheme={toggleTheme}/>
        </Flex>
      </Flex>
    ), {placement: 'top', maxWidth: windowWidth - 20, trigger: 'click'}
  );

  return {bombMenu, bombMenuRef, bombMenuVisible}
}

export default useBombMenu