import React from 'react'
import { Form, Label, Input, Button } from './styled-components'
import useForm from '../custom-hooks/use-form'
import calculatePayment from '../utils/calculate-payment'

const PaymentForm = (props) => {
  const { setPaymentValue } = props
  const onFormSubmit = () => {
    console.log(values)
    const payment = calculatePayment(values.income, values.payment)
    setPaymentValue(`$${payment.toFixed(2)}`)
  }
  const defaultValues = {payment:0, income:0}
  const {values, handleChange, handleSubmit} = useForm(defaultValues, onFormSubmit)
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="income">Income:</Label>
      <Input id="income" type="number" name="income" value={values.income} onChange={handleChange} />
      <Label htmlFor="payment">Payment:</Label>
      <Input id="payment" type="number" name="payment" value={values.payment} onChange={handleChange} />
      <Button type="submit" color="#ffb6c1">Calculate</Button>
    </Form>
  )
}

export default PaymentForm
