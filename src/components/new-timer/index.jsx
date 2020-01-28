import React from 'react'
import { Formik, Form, Field } from 'formik'
import './style.scss'

const NewTimer = ({ createTimer }) => {
  const onSubmit = async (values, { setStatus, setSubmitting, resetForm }) => {
    console.log('onSubmit', values)
    try {
      await createTimer(values)
      setStatus({ success: true })
      resetForm({})
    } catch (error) {
      setStatus({ error: error.message })
    } finally {
      setSubmitting(false)
    }
  }

  // TODO: Field value validation
  // TODO: Create error messages

  return (
    <div className="new-timer">
      <h3>Create a New Timer</h3>
      <Formik
        initialValues={{ number: '', description: '', hours: '0', minutes: '00', seconds: '00' }}
        onSubmit={onSubmit}
      >
        {({ status, isSubmitting }) => {
          return (
            <Form>
              <Field type="text" name="number"></Field>
              <Field type="text" name="description"></Field>
              <div className="new-timer__time">
                <Field type="text" name="hours"></Field>
                <Field type="text" name="minutes"></Field>
                <Field type="text" name="seconds"></Field>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Create
              </button>
              {status && status.error ? <p>{status.error}</p> : null}
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default NewTimer
