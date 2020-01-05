import React, { useEffect, useState } from 'react'
import TimerItem from '../../components/timer-item'
import './style.scss'
import NewTimer from '../../components/new-timer'
import firebase from '../../firebase'

const Timers = () => {
  const [timers, setTimers] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
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
    return () => unsubscribe()
  }, [])

  // TODO: Abstract to hooks file
  const createTimer = values => {
    const { number, description } = values
    firebase
      .firestore()
      .collection('timers')
      .add({
        number,
        description
      })
  }

  // TODO: Abstract to hooks file
  const deleteTimer = id => {
    firebase
      .firestore()
      .collection('timers')
      .doc(id)
      .delete()
      .then(() => console.log('Document successfully deleted!'))
      .catch(error => console.error('Error removing document: ', error))
  }

  return (
    <div className="tickets-page">
      <div className="tickets-container">
        {timers &&
          timers.map((timer, index) => {
            const { id, number, description } = timer
            return (
              <TimerItem
                id={id}
                key={`timer-${index}`}
                ticketNumber={number}
                description={description}
                deleteTimer={deleteTimer}
              />
            )
          })}
        <NewTimer createTimer={createTimer} />
      </div>
    </div>
  )
}

export default Timers
