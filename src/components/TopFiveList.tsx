import React, {
  FormEvent, ReactElement, useEffect, useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Container } from '../styles/components/topfivelist'

interface TopFiveTeam {
  name: string,
  avgAge: number
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

const TopFiveList = (): ReactElement => {
  const [highestTeams, setHighestTeams] = useState<TopFiveTeam[]>([])
  const [lowestTeams, setLowestTeams] = useState<TopFiveTeam[]>([])

  function formatTeams(allTeams: Team[]): TopFiveTeam[] {
    const allTeamsFormatted: TopFiveTeam[] = []
    allTeams.forEach((team: Team) => {
      let avg = 0
      let playersWithValidAge = 11
      team.teamPlayers.forEach((player: Player) => {
        if (player.age > 0) avg += player.age
        else playersWithValidAge -= 1
      })

      const avgAge = Number((avg / playersWithValidAge).toFixed(1))

      allTeamsFormatted.push({
        name: team.name,
        avgAge,
      })
    })

    return allTeamsFormatted
  }

  function handleTopFiveTeams() {
    const allTeams: Team[] = JSON.parse(localStorage.getItem('teams') || '[]')
    const allTeamsFormatted: TopFiveTeam[] = formatTeams(allTeams)

    setLowestTeams(
      [...allTeamsFormatted].sort((a, b) => a.avgAge - b.avgAge).slice(0, 5),
    )

    setHighestTeams(
      [...allTeamsFormatted].sort((a, b) => b.avgAge - a.avgAge).slice(0, 5),
    )
  }

  useEffect(() => {
    handleTopFiveTeams()
  }, [])

  function handleFocusTopTeam(event: FormEvent, contextClassName: string): void {
    const listTeams = document.querySelectorAll(`.${contextClassName}`)
    listTeams.forEach((team: any) => {
      team.classList.remove('highlight')
    })

    event.currentTarget.classList.add('highlight')
  }

  return (
    <Container>
      <div id="average-age-area">
        <div id="highest-avg-age">
          <h4>Highest avg age</h4>
          <ul>
            {highestTeams.map((team: TopFiveTeam) => (
              <li>
                <div
                  key={`${team.name}-${uuidv4()}`}
                  onClick={(event) => handleFocusTopTeam(event, 'highest-team')}
                  role="button"
                  aria-hidden
                  className="highest-team"
                >
                  <span>{team.name}</span>
                  <strong>{team.avgAge}</strong>
                </div>
              </li>
            ))}

          </ul>
        </div>
        <div id="lowest-avg-age">
          <h4>Lowest avg age</h4>
          <ul>
            {lowestTeams.map((team: TopFiveTeam) => (
              <li>
                <div
                  key={`${team.name}-${uuidv4()}`}
                  onClick={(event) => handleFocusTopTeam(event, 'lowest-team')}
                  role="button"
                  aria-hidden
                  className="lowest-team"
                >
                  <span>{team.name}</span>
                  <strong>{team.avgAge}</strong>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </Container>
  )
}

export default TopFiveList
