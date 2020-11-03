import React, { ReactElement, useEffect, useState } from 'react'
import { FiEdit, FiShare2, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'
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
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    setTeams(JSON.parse(localStorage.getItem('teams') || '[]'))
  }, [])

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
                    <FiTrash size={16} />
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
