import React from 'react'
import './App.scss'
import NavigationMenu from '../../components/navigation-menu'
import Timers from '../../containers/timers'

function App() {
  return (
    <div className="app-container">
      <NavigationMenu />
      <Timers />
    </div>
  )
}

export default App
