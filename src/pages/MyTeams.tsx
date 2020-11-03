import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import Navbar from '../components/Navbar'
import TableMyTeams from '../components/TableMyTeams'
import TopFiveList from '../components/TopFiveList'
import PlayersStats from '../components/PlayersStats'
import Footer from '../components/Footer'

import { Container } from '../styles/pages/myteams'

const MyTeams = (): ReactElement => (
  <>
    <Navbar />
    <Container>
      <div id="page-my-teams">

        <section id="my-teams" className="border-area">

          <header>
            <h2>My Teams</h2>
            <Link to="/manage-team">
              <FiPlus size={24} color="#FFF" />
            </Link>
          </header>
          <hr />
          <TableMyTeams />
        </section>

        <section id="stats">

          <div id="top-five" className="border-area">
            <header>
              <h2>Top 5</h2>
            </header>
            <hr />
            <TopFiveList />
          </div>

          <PlayersStats />
        </section>
        <Footer />
      </div>

    </Container>
  </>
)

export default MyTeams
