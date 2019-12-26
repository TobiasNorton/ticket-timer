import React from 'react'
import './style.scss'

const TimerItem = () => {
  return (
    <div className={'timer-item'}>
      <h3>REIT-430</h3>
      <p>Brief description about the ticket</p>
      <p>4 hours, 34 minutes</p>
      <button>Stop</button>
    </div>
  )
}

export default TimerItem
