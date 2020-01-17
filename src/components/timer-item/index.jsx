import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import './style.scss'

const TimerItem = ({ id, ticketNumber, description, deleteTimer }) => {
  const [isActive, setIsActive] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(seconds / 3600)
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds
  const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes
  const formattedTime = `${hours}:${minutesDisplay}:${secondsDisplay}`

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds + 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  return (
    <div className={'timer-item'}>
      <h3>{ticketNumber}</h3>
      <p>{description}</p>
      <p>{formattedTime}</p>
      <button
        className={classnames('track-btn', { tracking: isActive, 'not-tracking': !isActive })}
        onClick={toggleTimer}
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button>Edit</button>
      <button onClick={() => deleteTimer(id)}>Delete</button>
    </div>
  )
}

export default TimerItem
