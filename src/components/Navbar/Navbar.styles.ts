import { darken } from 'polished'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Drawer from './components/Drawer'
import Hamburger from './components/Hamburger'

export const StyledHeader = styled.div<{ isDesktop?: boolean }>`
  ${({ theme, isDesktop }) =>
    !isDesktop &&
    `
    background-color: ${theme.white}
  `}
  position: relative;
  z-index: 10;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
`

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
`

const activeClassName = 'activeLink'

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  line-height: 1;
  font-size: 15px;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  transition: color 0.15s linear;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
  margin-right: 40px;
  &.${activeClassName} {
    color: ${({ theme }) => theme.primary1};
    transition: color 0.15s linear;
    &:hover {
      color: ${({ theme }) => darken(0.1, theme.primary1)};
    }
  }

  &:last-child {
    margin-right: 0;
  }
`

export const StyledLink = styled.a`
  line-height: 1;
  font-size: 15px;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  transition: color 0.15s linear;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`

export const StyledDrawer = styled(Drawer)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
`

export const StyledHamburger = styled(Hamburger)`
  position: relative;
  z-index: 200;
`

export const IconWrapper = styled.div<{ clickable?: boolean }>`
  ${({ clickable }) => clickable && `cursor: pointer;`}
  display: flex;
`
