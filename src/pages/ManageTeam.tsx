/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  ReactElement, useState, useEffect, FormEvent,
} from 'react'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ReactTagInput from '@pathofdev/react-tag-input'
import getPlayersFromApi from '../services/apiFootball'

import { getNameInitials } from '../utils/getNameInitials'

import { teamValidation } from '../validations/teamValidation'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Container } from '../styles/pages/manageteam'
import { TagInputContainer } from '../styles/components/taginput'
import '@pathofdev/react-tag-input/build/index.css'

import { Player } from '../interfaces/Player'
import { Team } from '../interfaces/Team'

const ManageTeam = (): ReactElement => {
  const history = useHistory()

  const numberOfPlayersInATeam = 11
  const [formMode, setFormMode] = useState('CREATE_MODE')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [website, setWebsite] = useState('')
  const [teamType, setTeamType] = useState('fantasy')
  const [tags, setTags] = useState(['BR'])
  const [formation, setFormation] = useState('1')
  const [teamPlayers, setTeamPlayers] = useState<Player[]>([])

  const [playerNameToFind, setPlayerNameToFind] = useState('')
  const [searchPlayers, setSearchPlayers] = useState<Player[]>([])

  function fillFieldsWithTeamData(team: Team) {
    setName(team.name)
    setDescription(team.description || '')
    setWebsite(team.website)
    setTeamType(team.teamType)
    setTags(team.tags || [])
    setFormation(team.formation)
    setTeamPlayers(team.teamPlayers)
    setFormMode('UPDATE_MODE')
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.pathname)
    const idTeam = params.toString().replace('%2Fmanage-team%2F', ' ').replace('=', '').trim()
    const teams: Team[] = JSON.parse(localStorage.getItem('teams') || '[]')

    if (teams) {
      teams.forEach((team: Team) => {
        if (team.id.localeCompare(idTeam) === 0) fillFieldsWithTeamData(team)
      })
    }
  }, [])

  useEffect(() => {
    async function renderPlayersSearched() {
      if (playerNameToFind.length >= 4) {
        const playersFound = await getPlayersFromApi(playerNameToFind)
        setSearchPlayers([])
        setSearchPlayers(playersFound)
      } else {
        setSearchPlayers([])
      }
    }

    renderPlayersSearched()
  }, [playerNameToFind])

  function handleTeamSave(event: FormEvent) {
    if (teamValidation(name, website, teamPlayers.length)) {
      event.preventDefault()
      const team: Team = {
        id: uuidv4(),
        name,
        description,
        website,
        teamType,
        tags,
        formation,
        teamPlayers,
      }

      let allTeams: Team[] = []

      if (formMode.localeCompare('CREATE_MODE') === 0) {
        allTeams.push(team)
        allTeams = allTeams.concat(JSON.parse(localStorage.getItem('teams') || '[]'))
      } else if (formMode.localeCompare('UPDATE_MODE') === 0) {
        const params = new URLSearchParams(window.location.pathname)
        const idTeam = params.toString().replace('%2Fmanage-team%2F', ' ').replace('=', '').trim()
        allTeams = JSON.parse(localStorage.getItem('teams') || '[]')
        allTeams = allTeams.map((teamUpdate: Team) => {
          if (teamUpdate.id.localeCompare(idTeam) === 0) return team
          return teamUpdate
        })
      }

      localStorage.setItem('teams', JSON.stringify(allTeams))
      history.push('/')
    }
  }

  function handleSavePlayer(player: Player) {
    let isPlayerNotInTheTeam = true
    teamPlayers.forEach((playerInTheTeam: Player) => {
      if (playerInTheTeam.name === player.name) isPlayerNotInTheTeam = false
    })

    if (isPlayerNotInTheTeam && teamPlayers.length < numberOfPlayersInATeam) {
      setTeamPlayers([
        ...teamPlayers,
        {
          name: player.name,
          nacionality: player.nacionality,
          age: player.age,
        },
      ])
    }
  }

  function handleRemovePlayer(player?: Player) {
    if (player) {
      setTeamPlayers(teamPlayers.filter(
        (playerToDelete: Player) => playerToDelete.name !== player.name,
      ))
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <div id="page-manage-team">
          <form>
            <section id="create-your-team" className="border-area">

              <header>
                <h2>Create your team</h2>
              </header>
              <hr />

              <section id="team-information">
                <h3>TEAM INFORMATION</h3>
                <div className="form-div">

                  <div className="fields-area">
                    <span className="form-field-name">Team Name</span>
                    <label htmlFor="name">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Insert team name"
                        onChange={(event) => setName(event.currentTarget.value)}
                        value={name}
                        required
                      />
                    </label>

                    <span className="form-field-name">Description</span>
                    <label htmlFor="description">
                      <textarea
                        id="description"
                        name="description"
                        onChange={(event) => setDescription(event.currentTarget.value)}
                        value={description}
                      />
                    </label>
                  </div>

                  <div className="fields-area">
                    <span className="form-field-name">Team Website</span>
                    <label htmlFor="website">
                      <input
                        type="text"
                        id="website"
                        name="website"
                        placeholder="http://myteam.com"
                        onChange={(event) => setWebsite(event.currentTarget.value)}
                        value={website}
                      />
                    </label>

                    <span className="form-field-name">Team Type</span>
                    <div className="radio-area">
                      <div className="radio-line">
                        <input
                          type="radio"
                          id="real"
                          name="typeTeam"
                          value="real"
                          onChange={(event) => setTeamType(event.currentTarget.value)}
                          checked={teamType === 'real'}
                        />
                        <label htmlFor="real" id="first-radio">Real</label>
                      </div>
                      <div className="radio-line">
                        <input
                          type="radio"
                          id="fantasy"
                          name="typeTeam"
                          value="fantasy"
                          onChange={(event) => setTeamType(event.currentTarget.value)}
                          checked={teamType === 'fantasy'}
                        />
                        <label htmlFor="fantasy">Fantasy</label>
                      </div>
                    </div>
                    <br />

                    <span className="form-field-name">Tags</span>
                    <TagInputContainer>
                      <ReactTagInput
                        tags={tags}
                        onChange={(newTags: string[]) => setTags(newTags)}
                      />
                    </TagInputContainer>
                  </div>
                </div>
              </section>

              <section id="configure-squad">
                <h3>CONFIGURE SQUAD</h3>

                <div className="form-div">
                  <div className="fields-area">
                    <span className="form-field-name">
                      <label htmlFor="position">Formation</label>
                    </span>
                    <select
                      name="position"
                      id="position"
                      onChange={(event) => setFormation(event.currentTarget.value)}
                      value={formation}
                    >
                      <option value="1">3-2-2-3</option>
                      <option value="2">3-2-3-1</option>
                      <option value="3">3-4-3</option>
                      <option value="4">3-5-2</option>
                      <option value="5">4-2-3-1</option>
                      <option value="6">4-3-1-1</option>
                      <option value="7">4-3-2</option>
                      <option value="8">4-4-2</option>
                      <option value="9">4-5-1</option>
                      <option value="10">5-4-1</option>
                    </select>

                    <div id="position-players">
                      {[...Array(11)].map((x: number, i: number) => {
                        if (i === 2 || i === 3 || i === 9 || i === 10) {
                          return (
                            <React.Fragment key={`${uuidv4()}`}>
                              <span
                                onClick={() => handleRemovePlayer(teamPlayers[i])}
                                role="button"
                                aria-hidden
                              >
                                {teamPlayers[i] ? getNameInitials(teamPlayers[i].name) : '+'}
                              </span>
                              <span key={`${uuidv4()}`} className="hide-circle">+</span>
                            </React.Fragment>
                          )
                        }
                        return (
                          <span
                            key={`${uuidv4()}`}
                            onClick={() => handleRemovePlayer(teamPlayers[i])}
                            role="button"
                            aria-hidden
                          >
                            {teamPlayers[i] ? getNameInitials(teamPlayers[i].name) : '+'}
                          </span>
                        )
                      })}
                    </div>
                    {
                    (teamValidation(name, website, teamPlayers.length))
                    && (
                    <button type="submit" onClick={(event) => handleTeamSave(event)}>
                      Save
                    </button>
                    )
                    }

                  </div>
                  <div className="fields-area">
                    <span className="form-field-name">Search Players</span>
                    <label htmlFor="player-name">
                      <input
                        type="text"
                        id="player-name"
                        name="playerName"
                        placeholder="Insert player name"
                        onChange={(event) => setPlayerNameToFind(event.currentTarget.value)}
                        value={playerNameToFind}
                      />
                    </label>

                    <div id="players-list">
                      {searchPlayers.map((player: Player) => (
                        <div
                          className="player-info"
                          key={`${player.name}-${uuidv4()}`}
                          onClick={() => handleSavePlayer(player)}
                          role="button"
                          aria-hidden
                        >
                          <div className="info-left">
                            <strong>Name: </strong>
                            <span>{player.name}</span>
                            <br />
                            <strong>Nacionality: </strong>
                            <span>{player.nacionality || '--'}</span>
                          </div>
                          <div className="info-right">
                            <strong>Age: </strong>
                            <span>{player.age || '--'}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </section>

            </section>
          </form>
        </div>
        <Footer />
      </Container>
    </>
  )
}

export default ManageTeam
