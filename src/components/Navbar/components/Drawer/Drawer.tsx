import React, { FC } from 'react'
import { Transition } from 'react-transition-group'

// import UnlockWalletBtn from 'components/UnlockWalletBtn'

import { FadeAnimation, StyledDrawer, StyledLink, StyledNavLink, Wrapper } from './Drawer.styles'

interface MenuItem {
  title: string
  to?: string
  href?: string
}

interface Props {
  className?: string
  topComponent?: React.ReactNode
  open?: boolean
  menu: MenuItem[]
  onLinkClick: () => void
}

const Drawer: FC<Props> = ({ className, topComponent, open, menu, onLinkClick }: Props) => {
  return (
    <Wrapper className={className}>
      <Transition in={open} timeout={300} mountOnEnter unmountOnExit>
        {(state: string) => (
          <FadeAnimation state={state}>
            <StyledDrawer>
              {topComponent}
              {menu.map(({ title, to, href }) => {
                return href ? (
                  <StyledLink href={href} target="_blank" rel="noreferrer">
                    {title}
                  </StyledLink>
                ) : to ? (
                  <StyledNavLink exact to={to} key={to}>
                    {title}
                  </StyledNavLink>
                ) : null
              })}
              {/* <UnlockWalletBtn /> */}
            </StyledDrawer>
          </FadeAnimation>
        )}
      </Transition>
    </Wrapper>
  )
}

export default Drawer
