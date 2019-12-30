import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
// import AppRouter from '../../router'
import NavigationMenu from '../../components/navigation-menu'
import Timers from '../../containers/timers'
import firebase from '../../firebase'

function App() {
  return (
    <div className="app-container">
      {/* <AppRouter /> */}
      <NavigationMenu />
      <Router>
        <Route exact path="/" component={Timers} />
      </Router>
    </div>
  )
}

export default App
