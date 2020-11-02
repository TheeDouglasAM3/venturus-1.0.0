/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  ReactElement, useState, useEffect, ChangeEvent,
} from 'react'
import getPlayersFromApi from '../services/apiFootball'

import Navbar from '../components/Navbar'
import TagInput from '../components/TagInput'
import Footer from '../components/Footer'

import { Container } from '../styles/pages/manageteam'

interface Player {
  name: string,
  nacionality: string,
  age: number
}

const ManageTeam = (): ReactElement => {
  const [playerNameToFind, setPlayerNameToFind] = useState('')
  const [searchPlayers, setSearchPlayers] = useState<Player[]>([])

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

  return (
    <>
      <Navbar />
      <Container>
        <div id="page-manage-team">
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
                    <input type="text" id="name" name="name" placeholder="Insert team name" />
                  </label>

                  <span className="form-field-name">Description</span>
                  <label htmlFor="description">
                    <textarea id="description" name="description" />
                  </label>
                </div>

                <div className="fields-area">
                  <span className="form-field-name">Team Website</span>
                  <label htmlFor="website">
                    <input type="text" id="website" name="website" placeholder="http://myteam.com" />
                  </label>

                  <span className="form-field-name">Team Type</span>
                  <div className="radio-area">
                    <div className="radio-line">
                      <input type="radio" id="real" name="typeTeam" value="real" />
                      <label htmlFor="real" id="first-radio">Real</label>
                    </div>
                    <div className="radio-line">
                      <input type="radio" id="fantasy" name="typeTeam" value="fantasy" />
                      <label htmlFor="fantasy">Fantasy</label>
                    </div>
                  </div>
                  <br />

                  <span className="form-field-name">Tags</span>
                  <TagInput />

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
                  <select name="position" id="position">
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
                    <span>+ </span>
                    <span>+ </span>
                    <span>+ </span>
                    <span className="hide-circle">+ </span>
                    <span>+ </span>
                    <span className="hide-circle">+ </span>
                    <span>+ </span>
                    <span>+ </span>
                    <span>+ </span>
                    <span>+ </span>
                    <span>+ </span>
                    <span>+ </span>
                    <span className="hide-circle">+ </span>
                    <span>+ </span>
                    <span className="hide-circle">+ </span>
                  </div>
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
                      <div className="player-info" key={`${player.name}-${player.nacionality}`}>
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
        </div>
        <Footer />
      </Container>
    </>
  )
}

export default ManageTeam
