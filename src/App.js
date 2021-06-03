import React, { useState } from 'react'
import FlexContainer from './components/styled-components/FlexContainer'
import PaymentForm from './components/PaymentForm'
import PaymentDisplay from './components/PaymentDisplay'

const App = () => {
  const [payment, setPayment] = useState(null)
  const setPaymentValue = (paymentValue) => setPayment(paymentValue)
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1 style={{alignSelf: "center"}}>Payment Calculator</h1>
      <FlexContainer>
        <PaymentForm setPaymentValue={setPaymentValue}>
      {/* <form>
        <label htmlFor="income">Income:</label>
        <input type="number" id="income"/>
        <label htmlFor="payment">Payment:</label>
        <input type="number" id="payment"/>
        <button type="submit">Calculate</button>
      </form> */}
        </PaymentForm>
        <PaymentDisplay payment={payment} />
      {/* <div>
        <h3>Your payment is:</h3>
      </div> */}
      </FlexContainer>
    </div>
  )
}

export default App
