import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
import Tickets from '../tickets'
import TimerItem from '../../components/timer-item'
import NavigationMenu from '../../components/navigation-menu'

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Router>
        <div>
          <Route exact path="/" component={Tickets} />
          {/* <Route path="/archives" component={Archives} /> */}
        </div>
      </Router>
    </div>
  )
}

export default App
