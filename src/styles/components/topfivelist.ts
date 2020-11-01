import styled from 'styled-components'

export const Container = styled.div`
  #average-age-area {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.8rem;
    column-gap: 1.8rem;
  }

  #average-age-area li div{
    background: #FFF;
    margin: 0.2rem;
    padding: 0.8rem 0.4rem 0.8rem 0.4rem;
    border-radius: 0.8rem;
    border: solid 1px #FFF;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;  
  }

  #average-age-area h4 {
    margin-bottom: 0.8rem;
  }

  #average-age-area #lowest-avg-age,
  #average-age-area #highest-avg-age{
    width: 100%;
  }

  #average-age-area #lowest-avg-age ul,
  #average-age-area #highest-avg-age ul {
    background-color: #F2F2F2;
    border-radius: 0.8rem;
    padding: 0.12rem;
  }

  .highlight {
    border: solid 1px #f2295b !important;
  }

  @media (max-width: 600px) {
    #average-age-area {
      flex-wrap:wrap;
    }

    #average-age-area #lowest-avg-age{
      margin-top: 1.2rem;
    }
  }
`
