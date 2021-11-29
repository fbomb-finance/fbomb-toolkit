import React, { cloneElement, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components'
import { Text, useTooltip } from "../../..";
import Flex from "../../../components/Box/Flex";
import { MenuEntry, MenuSubEntry } from "../types";
import ArrowDropDown from "../../../components/Svg/Icons/ArrowDropDown"
import MenuLink from "./MenuLink";
import { Transition } from "react-transition-group";

const ItemsWrapper = styled.div<{open: boolean}>`
  opacity: ${({open}) => open ? '1' : '0'};
  transform: ${({open}) => open ? 'translateY(100px)' : 'none'};
  transition: 100ms opacity, transform;
`

const NavEntry = styled.div<{isActive: boolean}>`
  padding: 0 28px 0 0;
  font-size: 14pt;
  font-weight: ${({isActive}) => isActive ? '600' : '300'};
  line-height: initial;

  text-decoration: ${({isActive}) => isActive ? 'underline' : 'none'};
  text-decoration-thickness: 2px;
  text-decoration-color: ${({theme}) => theme.colors.primary};

  a {
    text-decoration: ${({isActive}) => isActive ? 'underline' : 'none'};
    text-decoration-thickness: 2px;
    text-decoration-color: ${({theme}) => theme.colors.primary};
  }

  .dropdown-button {
    cursor: default;
  }
`

const SubEntry = styled.div<{isActive?: boolean}>`
  display: block;
  padding: 4px 12px;
  font-size: 14pt;
  font-weight: ${({isActive}) => isActive ? '600' : '300'};
  line-height: initial;

  a {
    text-decoration: ${({isActive}) => isActive ? 'underline' : 'none'};
    text-decoration-thickness: 2px;
    text-decoration-color: ${({theme}) => theme.colors.primary};
  }
`

const Entries: React.FC<{entries: MenuSubEntry[], activeLink?: string}> = ({entries, activeLink}) => {
  return (
    <>
      {entries.map(item => (
        <SubEntry isActive={item.href === activeLink} key={item.label}>
          <Link to={item.href}>{item.label}</Link>
        </SubEntry>
      ))}
    </>
  )
}

const TopLink: React.FC<{link: MenuEntry, activeLink?: string}> = ({link, activeLink}) => {  
  const {targetRef, tooltip, tooltipVisible} = useTooltip(
    link.items ? <Entries entries={link.items} activeLink={activeLink}/> : null, {placement: "bottom", trigger: "hover-click"}
  );

  return (
    <Flex ref={targetRef}>
      <div className="dropdown-button">
        <Text>{link.label}</Text>
        {tooltipVisible && tooltip}
      </div>
      <ArrowDropDown width="28px"/>
    </Flex>
  )
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
              <TopLink link={link} activeLink={location.pathname}/>
            ) : (
              <MenuLink href={link.href ?? ''}>
                <Text>{label}</Text>
              </MenuLink>
            )}
          </NavEntry>
        )
      })}
    </Flex>
  )
}

export default NavTopLinks