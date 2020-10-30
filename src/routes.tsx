import React, { ReactElement } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MyTeams from './pages/MyTeams'

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MyTeams} exact />
    </Switch>
  </BrowserRouter>
)

export default Routes
