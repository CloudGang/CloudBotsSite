import React from 'react'
import styled from 'styled-components'

const StyledCartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StyledCard = styled.div`
  padding: 20px;
  font-size: 1.4rem;
`

const EM = styled.span`
  font-style: italic;
`

export default function Cart({ order }) {
  console.log("Cart -> order", order)

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{props.children}</a>
    );
  }

  return (
    <StyledCartContainer>
      {order.length !== 0 ?
        <>
          <h2>Your order is being processed.</h2>
          {order.map(o => {
            return (
              <StyledCard>
                
                Hello {o.customer}! Your <EM>{o.size}</EM> Bot with <EM>{o.toppingsChecked.map(topping => `${topping.name}, `)}</EM> functionality is being prepped!
                <br />
                We will contact you soon!
                <br />
                <br />
                {o.instructions ? `Special Instruction:${o.instructions} has also been noted` : ''}

                  <Mailto email="cloudbotsbiz@gmail.com" subject={'Bot Inquiry: '+o.email} body={'User: '+o.customer+'.'+' Requires: '+o.size+' Bot with '+o.toppingsChecked.map(topping => `${topping.name}, `)+' functionality. ' + 'Special Instruction: '+o.instructions+' has also been noted'}>
                  <br />Submit Inquiry
                  </Mailto>,
              </StyledCard>
            )
          })}
        </>
        : <h2>Your Cart is empty!</h2>}
    </StyledCartContainer>
  )
}
