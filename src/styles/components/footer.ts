import styled from 'styled-components'

export const Container = styled.div`

  footer { 
    grid-area: footer;

    width: 100%;
    padding: 0.8rem;
    margin-top: 1.2rem;
    background: #E9E9E9;
    font-size: 1.0rem;
    text-align: center;
    position:absolute;
    left: 0;
    bottom: 0;
  }

  @media (max-width: 600px) {
    footer { 
      text-align: center;
      position:relative;
    }
  }
`
