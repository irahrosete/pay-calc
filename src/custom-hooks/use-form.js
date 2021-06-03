import { useState } from 'react'

const useForm = (defaultValues, onSubmit) => {
  const [values, setValues] = useState(defaultValues)
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
    onSubmit()
  }
  return {values, handleChange, handleSubmit}
}

export default useForm