import React, { ReactElement } from 'react'
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
          <img src={icon} alt="logo" />
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
