import React, { useState } from 'react'
import './style.scss'

const TimerItem = ({ id, number, description }) => {
  const [isTracking, setIsTracking] = useState(false)
  const toggleTimer = () => {
    setIsTracking(!isTracking)
  }

  return (
    <div className={'timer-item'}>
      <h3>{number}</h3>
      <p>{description}</p>
      <p>4 hours, 34 minutes</p>
      <button className={isTracking ? 'tracking' : 'not-tracking'} onClick={toggleTimer}>
        {isTracking ? 'Stop' : 'Start'}
      </button>
    </div>
  )
}

export default TimerItem
