import React, { FC, ReactNode } from 'react'

import { StyledContainer } from './Container.styles'

const Container: FC = ({ children }: { children?: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
