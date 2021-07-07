import { darken } from 'polished'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledDrawer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.04);
`

const activeClassName = 'activeLink'

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  line-height: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  transition: color 0.15s linear;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
  margin-bottom: 40px;
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

export const Wrapper = styled.div`
  width: 100%;
`

export const FadeAnimation = styled.div<{ state: string }>`
  transition: 0.2s;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
`

export const StyledLink = styled.a`
  line-height: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  transition: color 0.15s linear;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
  margin-bottom: 40px;

  &:last-child {
    margin-right: 0;
  }
`
