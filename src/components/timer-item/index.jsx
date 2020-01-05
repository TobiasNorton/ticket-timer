import React, { useState } from 'react'
import classnames from 'classnames'
import './style.scss'

const TimerItem = ({ id, ticketNumber, description, deleteTimer }) => {
  const [isTracking, setIsTracking] = useState(false)
  const toggleTimer = () => {
    setIsTracking(!isTracking)
  }

  return (
    <div className={'timer-item'}>
      <h3>{ticketNumber}</h3>
      <p>{description}</p>
      <p>4 hours, 34 minutes</p>
      <button
        className={classnames('track-btn', { tracking: isTracking, 'not-tracking': !isTracking })}
        onClick={toggleTimer}
      >
        {isTracking ? 'Stop' : 'Start'}
      </button>
      <button>Edit</button>
      <button onClick={() => deleteTimer(id)}>Delete</button>
    </div>
  )
}

export default TimerItem
