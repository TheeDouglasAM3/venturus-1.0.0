import React, { ReactElement } from 'react'
import { Container } from '../styles/components/navbar'

import icon from '../images/icon.png'

const Navbar = (): ReactElement => (
  <Container>
    <nav>
      <div className="project-name">
        <img src={icon} alt="logo" />
        <span>Squad Management Tool</span>
      </div>
      <div className="user-profile">
        <span id="first-name">John</span>
        <span id="last-name">Doe</span>
        <div id="profile-image">
          JD
        </div>
      </div>
    </nav>
  </Container>
)

export default Navbar
