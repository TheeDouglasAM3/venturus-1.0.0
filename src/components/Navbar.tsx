import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { getNameInitials } from '../utils/getNameInitials'

import { Container } from '../styles/components/navbar'

import icon from '../images/icon.png'

const Navbar = (): ReactElement => {
  const firstName = 'John'
  const lastName = 'Doe'

  return (
    <Container>
      <nav>
        <div className="project-name">
          <Link to="/">
            <img src={icon} alt="logo" />
          </Link>
          <span>Squad Management Tool</span>
        </div>
        <div className="user-profile">
          <span id="first-name">{firstName}</span>
          <span id="last-name">{lastName}</span>
          <div id="profile-image">
            {getNameInitials(`${firstName} ${lastName}`)}
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
