import React, { ReactElement, useEffect, useState } from 'react'
import { getNameInitials } from '../utils/getNameInitials'
import { Container } from '../styles/components/playersstats'

interface PickedPlayer {
  name: string,
  percentage: number,
}

interface Player {
  name: string,
  nacionality: string,
  age: number
}

interface Team {
  id: string
  name: string,
  description?: string,
  website: string,
  teamType: string,
  tags?: string[],
  formation: string,
  teamPlayers: Player[]
}

const PlayersStats = (): ReactElement => {
  const [mostPickedPlayer, setMostPickedPlayer] = useState<PickedPlayer>({
    name: '--',
    percentage: 0,
  })

  const [lessPickedPlayer, setLessPickedPlayer] = useState<PickedPlayer>({
    name: '--',
    percentage: 0,
  })

  function findPickedPlayer(): PickedPlayer[] {
    const allTeams: Team[] = JSON.parse(localStorage.getItem('teams') || '[]')
    const allPlayersName: string[] = []
    const allPickedPlayers: PickedPlayer[] = []

    allTeams.forEach((team: Team) => {
      team.teamPlayers.forEach((player: Player) => {
        allPlayersName.push(player.name)
      })
    })

    allPlayersName.sort()

    let count = 1
    for (let i = 0; i < allPlayersName.length; i += 1) {
      if (i + 1 < allPlayersName.length) {
        if (allPlayersName[i].localeCompare(allPlayersName[i + 1]) === 0) {
          count += 1
        } else {
          allPickedPlayers.push({
            name: allPlayersName[i],
            percentage: Number(((count / allTeams.length) * 100).toFixed(0)),
          })

          count = 1
        }
      }
    }

    return allPickedPlayers.sort((a, b) => b.percentage - a.percentage)
  }

  useEffect(() => {
    const allPickedPlayers: PickedPlayer[] = findPickedPlayer()
    if (allPickedPlayers) {
      setMostPickedPlayer(allPickedPlayers[0])
      setLessPickedPlayer(allPickedPlayers[allPickedPlayers.length - 1])
    }
  }, [])

  return (
    <Container>
      <div id="player-stats">

        <div className="picked-player">
          <h3>Most picked player</h3>
          <div className="player-area">

            <div className="player-display">
              <span>{mostPickedPlayer && getNameInitials(mostPickedPlayer.name)}</span>
            </div>

            <div className="player-percentage">
              <span>
                {mostPickedPlayer && mostPickedPlayer.percentage}
                %
              </span>
            </div>

          </div>
        </div>

        <div className="picked-player">
          <h3>Less picked player</h3>
          <div className="player-area">

            <div className="player-display">
              <span>{lessPickedPlayer && getNameInitials(lessPickedPlayer.name)}</span>
            </div>

            <div className="player-percentage">
              <span>
                {lessPickedPlayer && lessPickedPlayer.percentage}
                %
              </span>
            </div>

          </div>
        </div>
      </div>
    </Container>
  )
}

export default PlayersStats
