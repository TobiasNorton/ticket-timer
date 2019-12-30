import React from 'react'
import { Formik, Form, Field } from 'formik'
import './style.scss'

const NewTimer = ({ createNewTimer }) => {
  const onSubmit = async (values, { setStatus, setSubmitting }) => {
    // try {
    //   await createNewTimer(values)
    //   setStatus({ success: true })
    // } catch (error) {
    //   setStatus({ error: error.message })
    // } finally {
    //   setSubmitting(false)
    // }
    createNewTimer(values)
    console.log('onSubmit', values)
  }

  return (
    <div className={'new-timer'}>
      <h3>Create a New Timer</h3>
      <Formik initialValues={{ number: '', description: '' }} onSubmit={onSubmit}>
        {({ values, isSubmitting }) => (
          <Form>
            <Field type="text" name="number"></Field>
            <Field type="text" name="description"></Field>
            <button type="submit" disabled={isSubmitting}>
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewTimer
