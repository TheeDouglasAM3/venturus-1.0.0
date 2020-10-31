import styled from 'styled-components'

import bgFootball from '../../images/bgfootball.png'

export const Container = styled.main`
  #page-my-teams {
    width: 100vw;
    height: auto;
    padding: 5.4rem 1.8rem 0rem 1.8rem; 
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.6rem;
    grid-template-areas: 
      "myteams stats"
      "footer footer"
    ;
  }

  #page-my-teams .border-area {
    width: 100%;
    background: #FFF;
    border: solid 1px #EEE;
    border-radius: 0.8rem;
  }

  #page-my-teams #my-teams {
    grid-area: myteams;

    min-height: 32rem;
  }

  #page-my-teams .border-area header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #page-my-teams .border-area header h2{
    padding: 1.8rem;
  }

  #page-my-teams .border-area header a{
    margin: 1.2rem 1.8rem 1.2rem 0rem;
  }

  #page-my-teams .border-area header h2 {
    color: #532d8c;
  }

  #page-my-teams #my-teams header a {
    width: 2.8rem;
    height: 2.8rem;
    background: linear-gradient(180deg, #bf34b1 0%, #532d8c 100%);
    border-radius: 0.8rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition: box-shadow 0.4s;
  }

  #page-my-teams #my-teams header a:hover {
    box-shadow: 3px 11px 16px -10px rgba(0,0,0,0.5);
  }

  #page-my-teams #stats {
    grid-area: stats;
    
    width: 100%;
  }

  #page-my-teams #stats #player-stats {
    height: 18rem;
    margin-top: 1.8rem;
    background-image: url('${bgFootball}'), linear-gradient(180deg, #bf34b1 0%, #532d8c 100%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 0.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #page-my-teams #stats #player-stats .picked-player {
    width: 100%;
    padding: 1.8rem;
  }

  #page-my-teams #stats #player-stats .picked-player h3 {
    color: #FFF;
    margin-bottom: 1.8rem;
    text-align: center;
  }

  #page-my-teams #stats #player-stats .picked-player .player-area {
    display: flex;
    justify-content: center;
  }

  #page-my-teams #stats #player-stats .picked-player .player-area .player-display {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #page-my-teams #stats #player-stats .picked-player .player-area .player-display span {
    background: #FFF;
    width: 8rem;
    height: 8rem;
    border-radius: 8rem;
    text-align: center;
    line-height: 8rem;
    font-size: 3.6rem;
  }

  #page-my-teams #stats #player-stats .picked-player .player-area .player-percentage span{
    width: 30%;
    color: #FFF;
    font-weight: bold;
    font-size: 1.6rem;
    vertical-align: top;
    border-bottom: solid 2px #FFF;
  }

  @media (max-width: 1000px) {
    #page-my-teams {
      grid-template-columns: 1fr;
      grid-template-areas: 
        "myteams"
        "stats"
        "footer"
      ;
    }

    #page-my-teams #my-teams {
      margin-bottom: 1.8rem;
      min-height: 22rem;
    }
  }
`
