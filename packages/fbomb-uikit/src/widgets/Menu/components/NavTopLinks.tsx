import React from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components'
import { useTooltip } from "../../..";
import Flex from "../../../components/Box/Flex";
import { MenuEntry } from "../types";
import ArrowDropDown from "../../../components/Svg/Icons/ArrowDropDown"
import MenuLink from "./MenuLink";

const NavEntry = styled.div<{isActive: boolean}>`
  padding: 0 20px;
  font-size: 16pt;
  font-weight: ${({isActive}) => isActive ? '600' : '400'};
`

const TopLink: React.FC<{link: MenuEntry}> = ({link}) => {
  const {targetRef, tooltip, tooltipVisible} = useTooltip("test", {})
  return <div ref={targetRef}>{link.label} {tooltipVisible && tooltip}</div>
}

const NavTopLinks: React.FC<{links: MenuEntry[]}> = ({links}) => {
  const location = useLocation()
  
  return (
    <Flex>
      {links.map((link) => {
        if (link.label === "Home") return null
        const label = link.shortLabel ?? `${link.label.substr(0, 5)}${link.label.length > 5 ? '...' : ''}`
        const isActive = link.items ? link.items.some((item) => item.href === location.pathname) : link.href === location.pathname
        return (
          <NavEntry isActive={isActive} key={link.label}>
            {link.items ? (
              <Flex ali>
                <TopLink link={link}/>
                <ArrowDropDown width="28px"/>
              <Flex/>
            ) : (
              <MenuLink href={link.href ?? ''}>{label}</MenuLink>
            )}
          </NavEntry>
        )
      })}
    </Flex>
  )
}

export default NavTopLinks