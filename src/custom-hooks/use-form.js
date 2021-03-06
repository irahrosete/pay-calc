import { useState, useEffect } from 'react'

const useForm = (defaultValues, onSubmit, validate) => {
  const [values, setValues] = useState(defaultValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleChange = (event) => {
    setValues(values => {
      return {
        ...values,
        [event.target.name]: event.target.value
      }
    })
  }
  const handleSubmit = (event) => {
    // event?.preventDefault()
    event && event.preventDefault()
    let formErrors = validate(values)
    setIsSubmitting(true)
    setErrors(formErrors)
    // onSubmit()
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmit()
    }
  }, [errors, isSubmitting])
  return {values, handleChange, handleSubmit, errors}
}

export default useForm