import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
// import AppRouter from '../../router'
import NavigationMenu from '../../components/navigation-menu'
import Tickets from '../../containers/tickets'

function App() {
  return (
    <div className="app-container">
      {/* <AppRouter /> */}
      <NavigationMenu />
      <Router>
        <Route exact path="/" component={Tickets} />
      </Router>
    </div>
  )
}

export default App
