import React, { ReactElement } from 'react'
import Routes from './routes'
import GlobalStyle from './styles/global'

const App = (): ReactElement => (
  <>
    <GlobalStyle />
    <Routes />
  </>
)

export default App
