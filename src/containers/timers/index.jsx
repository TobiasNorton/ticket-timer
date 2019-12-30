import React, { useEffect, useState } from 'react'
import TimerItem from '../../components/timer-item'
import './style.scss'
import NewTimer from '../../components/new-timer'
import firebase from '../../firebase'

const Timers = () => {
  const [timers, setTimers] = useState([])
  // const createNewTimer = values => {
  //   const { number, description } = values
  //   firebase
  //     .firestore()
  //     .collection('timers')
  //     .add({
  //       number,
  //       description
  //     })
  //     .then(response => console.log('response', response))
  // }

  useEffect(() => {
    firebase
      .firestore()
      .collection('timers')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setTimers(data)
      })
  }, [])

  return (
    <div className="tickets-page">
      <div className="tickets-container">
        {timers &&
          timers.map(timer => {
            const { id, number, description } = timer
            return <TimerItem key={id} number={number} description={description} />
          })}
        <NewTimer createNewTimer={''} />
      </div>
    </div>
  )
}

export default Timers
