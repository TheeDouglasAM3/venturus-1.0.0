import React, { FormEvent, ReactElement } from 'react'
import { Container } from '../styles/components/topfivelist'

const TopFiveList = (): ReactElement => {
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
            <li>
              <div
                onClick={(event) => handleFocusTopTeam(event, 'highest-team')}
                role="button"
                aria-hidden
                className="highest-team"
              >
                <span>Inter Milan</span>
                <strong>32.0</strong>
              </div>
            </li>
            <li>
              <div
                onClick={(event) => handleFocusTopTeam(event, 'highest-team')}
                role="button"
                aria-hidden
                className="highest-team"
              >
                <span>Inter Milan</span>
                <strong>32.0</strong>
              </div>
            </li>
            <li>
              <div
                onClick={(event) => handleFocusTopTeam(event, 'highest-team')}
                role="button"
                aria-hidden
                className="highest-team"
              >
                <span>Inter Milan</span>
                <strong>32.0</strong>
              </div>
            </li>
            <li>
              <div
                onClick={(event) => handleFocusTopTeam(event, 'highest-team')}
                role="button"
                aria-hidden
                className="highest-team"
              >
                <span>Inter Milan</span>
                <strong>32.0</strong>
              </div>
            </li>
            <li>
              <div
                onClick={(event) => handleFocusTopTeam(event, 'highest-team')}
                role="button"
                aria-hidden
                className="highest-team"
              >
                <span>Inter Milan</span>
                <strong>32.0</strong>
              </div>
            </li>
          </ul>
        </div>
        <div id="lowest-avg-age">
          <h4>Lowest avg age</h4>
          <ul>
            <li>
              <div
                onClick={(event) => handleFocusTopTeam(event, 'lowest-team')}
                role="button"
                aria-hidden
                className="lowest-team"
              >
                <span>Inter Milan</span>
                <strong>32.0</strong>
              </div>
            </li>
            <li>
              <div
                onClick={(event) => handleFocusTopTeam(event, 'lowest-team')}
                role="button"
                aria-hidden
                className="lowest-team"
              >
                <span>Inter Milan</span>
                <strong>32.0</strong>
              </div>
            </li>
            <li>
              <div
                onClick={(event) => handleFocusTopTeam(event, 'lowest-team')}
                role="button"
                aria-hidden
                className="lowest-team"
              >
                <span>Inter Milan</span>
                <strong>32.0</strong>
              </div>
            </li>
            <li>
              <div
                onClick={(event) => handleFocusTopTeam(event, 'lowest-team')}
                role="button"
                aria-hidden
                className="lowest-team"
              >
                <span>Inter Milan</span>
                <strong>32.0</strong>
              </div>
            </li>
            <li>
              <div
                onClick={(event) => handleFocusTopTeam(event, 'lowest-team')}
                role="button"
                aria-hidden
                className="lowest-team"
              >
                <span>Inter Milan</span>
                <strong>32.0</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default TopFiveList
