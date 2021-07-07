import cx from 'clsx'
import React, { FC } from 'react'

import { HamburgerBox, HamburgerButton, HamburgerInner } from './Hamburger.styles'

interface Props {
  className?: string
  isMenuOpen?: boolean
  height?: string
  onClick: () => void
}

const Hamburger: FC<Props> = ({ className, isMenuOpen, onClick }: Props) => {
  const hamburgerClassName = cx(className, 'hamburger', 'hamburger--squeeze', isMenuOpen && 'is-active')

  return (
    <HamburgerButton className={hamburgerClassName} onClick={onClick} type="button">
      <HamburgerBox className="hamburger-box">
        <HamburgerInner className="hamburger-inner"></HamburgerInner>
      </HamburgerBox>
    </HamburgerButton>
  )
}

export default Hamburger
