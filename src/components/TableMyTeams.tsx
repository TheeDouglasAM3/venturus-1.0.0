import React, {
  MouseEvent, ReactElement, useEffect, useState,
} from 'react'
import { FiEdit, FiShare2, FiTrash } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Container } from '../styles/components/tablemyteams'

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

const TableMyTeams = (): ReactElement => {
  const history = useHistory()
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    setTeams(JSON.parse(localStorage.getItem('teams') || '[]'))
  }, [])

  function RemoveTeam(event: MouseEvent, id: string) {
    event.currentTarget.parentElement?.parentElement?.parentElement?.classList.add('hide')

    const allTeams: Team[] = JSON.parse(localStorage.getItem('teams') || '[]')
    let indexToDelete = -1
    allTeams.forEach((team: Team, index: number) => {
      if (id.localeCompare(team.id) === 0) indexToDelete = index
    })

    if (indexToDelete !== -1) {
      allTeams.splice(indexToDelete, 1)
      localStorage.setItem('teams', JSON.stringify(allTeams))
    }
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th id="name-column">Name</th>
            <th id="description-column">Description</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team: Team) => (
            <tr key={`${uuidv4()}`}>
              <td>{team.name}</td>
              <td className="description">
                <span>
                  {team.description}
                </span>
                <div className="action-buttons">
                  <Link to={`/manage-team/${team.id}`}>
                    <FiEdit size={16} />
                  </Link>
                  <>
                    <FiShare2 size={16} />
                  </>
                  <>
                    <FiTrash size={16} onClick={(event) => RemoveTeam(event, team.id)} />
                  </>
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </Container>
  )
}

export default TableMyTeams
