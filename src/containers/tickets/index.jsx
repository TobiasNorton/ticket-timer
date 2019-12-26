import React from 'react'
import TimerItem from '../../components/timer-item'
import './style.scss'
import NewTimer from '../../components/new-timer'

const Tickets = () => {
  // const createNewTimer = values => {
  //   return <TimerItem number={values.number} description={values.description} />
  // }

  return (
    <div className="tickets-page">
      <div className="tickets-container">
        <TimerItem />
        <TimerItem />
        <TimerItem />
        <TimerItem />
        <TimerItem />
        <NewTimer createNewTimer={''} />
      </div>
    </div>
  )
}

export default Tickets
