import React, { ReactElement } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MyTeams from './pages/MyTeams'
import ManageTeam from './pages/ManageTeam'

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MyTeams} exact />
      <Route path="/manage-team" component={ManageTeam} />
    </Switch>
  </BrowserRouter>
)

export default Routes
