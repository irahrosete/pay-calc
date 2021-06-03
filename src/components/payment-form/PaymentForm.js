import React from 'react'
import { Form, Label, Input, Button } from '../styled-components'
import useForm from '../../custom-hooks/use-form'
import calculatePayment from '../../utils/calculate-payment'
import validate from './validation-rules'

const PaymentForm = (props) => {
  const { setPaymentValue } = props
  const onFormSubmit = () => {
    console.log(values)
    const payment = calculatePayment(values.income, values.payment)
    setPaymentValue(`$${payment.toFixed(2)}`)
  }
  const defaultValues = {payment:0, income:0}
  const {values, handleChange, handleSubmit, errors} = useForm(defaultValues, onFormSubmit, validate)
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="income">Income:</Label>
      <Input error={errors.income && true} id="income" type="number" name="income" value={values.income} onChange={handleChange} />
      {errors.income && <p style={{color: "red"}}>{errors.income}</p>}
      <Label htmlFor="payment">Payment:</Label>
      <Input error={errors.payment && true} id="payment" type="number" name="payment" value={values.payment} onChange={handleChange} />
      {errors.payment && <p style={{color: "red"}}>{errors.payment}</p>}
      <Button type="submit" color="#ffb6c1">Calculate</Button>
    </Form>
  )
}

export default PaymentForm