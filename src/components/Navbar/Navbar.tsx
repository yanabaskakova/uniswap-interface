import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useWindowSize } from 'react-use'
// import { useLocation } from 'react-use' //logo-with-text
import Logo from '../../assets/svg/logo-with-text.svg'
import Container from './components/Container'
// import Icon from 'components/Icon'
// import UnlockWalletBtn from 'components/UnlockWalletBtn'

import {
  IconWrapper,
  MenuList,
  RightSide,
  StyledDrawer,
  StyledHamburger,
  StyledHeader,
  StyledLink,
  StyledNavLink,
  Wrapper,
} from './Navbar.styles'

interface NavlinkParams {
  title: string
  to?: string
  href?: string
  newTab?: boolean
}

const HEADER_NAVLINKS: NavlinkParams[] = [
  { title: 'Home', href: 'https://www.rara.farm/' },
  { title: 'Stake', href: 'https://www.rara.farm/stake' },
  { title: 'Exchange', to: '/' },
  { title: 'About', href: 'https://doc.rara.farm/', newTab: true },
]

const Header: FC = () => {
  const windowSize = useWindowSize()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isDesktop = windowSize.width > 768

  const history = useHistory()

  const handleClick = () => {
    history.push('/')
  }

  return (
    <StyledHeader isDesktop={isDesktop}>
      <Container>
        <Wrapper>
          <IconWrapper clickable onClick={handleClick}>
            <img width={'112px'} src={Logo} alt="logo" />
          </IconWrapper>
          {isDesktop && (
            <RightSide>
              <MenuList>
                {HEADER_NAVLINKS.map(({ title, to, href, newTab }) =>
                  href ? (
                    <StyledLink
                      href={href}
                      key={title}
                      target={newTab ? '_blank' : undefined}
                      rel={newTab ? 'noreferrer' : undefined}
                    >
                      {title}
                    </StyledLink>
                  ) : (
                    <StyledNavLink exact to={to!} key={to}>
                      {title}
                    </StyledNavLink>
                  )
                )}
              </MenuList>
              {/* <UnlockWalletBtn /> */}
            </RightSide>
          )}

          {!isDesktop && (
            <>
              <StyledHamburger isMenuOpen={isMenuOpen} onClick={toggleMenu} />
              <StyledDrawer menu={HEADER_NAVLINKS as any} onLinkClick={() => setIsMenuOpen(false)} open={isMenuOpen} />
            </>
          )}
        </Wrapper>
      </Container>
    </StyledHeader>
  )
}

export default Header
