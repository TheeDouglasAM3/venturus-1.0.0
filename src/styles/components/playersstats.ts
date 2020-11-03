import styled from 'styled-components'

import bgFootball from '../../images/bgfootbally.png'

export const Container = styled.div`

  #player-stats {
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

  #player-stats .picked-player {
    width: 100%;
    padding: 1.8rem;
  }

  #player-stats .picked-player h3 {
    color: #FFF;
    margin-bottom: 1.8rem;
    text-align: center;
  }

  #player-stats .picked-player .player-area {
    display: flex;
    justify-content: center;
  }

  #player-stats .picked-player .player-area .player-display {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #player-stats .picked-player .player-area .player-display span {
    background: #FFF;
    width: 8rem;
    height: 8rem;
    border-radius: 8rem;
    text-align: center;
    line-height: 8rem;
    font-size: 3.6rem;
  }

  #player-stats .picked-player .player-area .player-percentage span{
    width: 30%;
    color: #FFF;
    font-weight: bold;
    font-size: 1.6rem;
    vertical-align: top;
    border-bottom: solid 2px #FFF;
  }
`
