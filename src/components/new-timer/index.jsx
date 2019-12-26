import React from 'react'
import { Formik } from 'formik'
import './style.scss'

const NewTimer = () => {
  return (
    <div className={'new-timer'}>
      <h3>Create a New Timer</h3>
      <Formik initialValues={{ number: '', description: '' }}>
        <form>
          <input></input>
          <input></input>
        </form>
      </Formik>

      <button>Create</button>
    </div>
  )
}

export default NewTimer
