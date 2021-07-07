import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100vw;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1600px) {
    max-width: 1400px;
  }

  @media (max-width: 1440px) {
    max-width: 1140px;
  }

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 992px) {
    max-width: 800px;
  }

  @media (max-width: 768px) {
    max-width: 720px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 375px) {
    max-width: 100%;
    padding: 0 10px;
  }
`
