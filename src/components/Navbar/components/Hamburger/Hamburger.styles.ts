import styled from 'styled-components'

export const HamburgerButton = styled.button`
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`

export const HamburgerInner = styled.span`
  width: 30px;
  &,
  &::after,
  &::before {
    height: 2px;
    width: 30px;
    background-color: ${({ theme }) => theme.text1} !important;
  }
`

export const HamburgerBox = styled.span`
  width: 30px;
`
