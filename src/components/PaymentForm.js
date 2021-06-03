import React from 'react'
import { Form, Label, Input, Button } from './styled-components'

const PaymentForm = (props) => {
  return (
    <Form>
      <Label htmlFor="income">Income:</Label>
      <Input id="income" type="number" />
      <Label htmlFor="payment">Payment:</Label>
      <Input id="payment" type="number" />
      <Button type="submit" color="#ffb6c1">Calculate</Button>
    </Form>
  )
}

export default PaymentForm
