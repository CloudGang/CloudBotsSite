import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { FormGroup, Input, Button, Alert } from 'reactstrap'
import { BrowserHistory } from 'react-router-dom'
import { Link, NavLink } from "react-router-dom"
import styled from 'styled-components'
import * as yup from 'yup'
import history from './history';


const Form = styled.form`
  max-width: 800px;
  margin: 60px auto;
  border: 2px solid black;
  padding: 20px;
`
const Styledh3 = styled.h3`
  text-align: center;
`
const StyledToppings = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 400px;
  align-content: space-between;
  padding: 20px;
`
const StyledLabel = styled.label`
  padding: 10px 0;
`
const StyledOrderFooter = styled.div`
  display: flex;
  justify-content: space-between;
`
  
export default function OrderForm({ order, setOrder }) {

  const initialState = {
    customer: '',
    email: '',
    size: '',
    sauces: [
      { name: 'Original Red', id: 'original-red', isChecked: false },
      { name: 'Spinach Alfredo', id: 'spinach-alfredo', isChecked: false },
      { name: 'Garlic Ranch', id: 'garlic-ranch', isChecked: false },
      { name: 'BBQ Sauce', id: 'bbq-sauce', isChecked: false }
    ],
    toppingsChecked: [
      { name: 'Click', id: 'autoclick', isChecked: false, cypressTest: 'autoclickTest' },
      { name: 'Follow', id: 'autofollow', isChecked: false, cypressTest: 'autofollTest' },
      { name: 'Like', id: 'spicy-italian-sausage', isChecked: false },
      { name: 'Post Like', id: 'roasted-garlic', isChecked: false },
      { name: 'Page Like', id: 'black-olives', isChecked: false },
      { name: 'UnFollow', id: 'canadian-bacon', isChecked: false },
      { name: 'Unlike', id: 'grilled-chicken', isChecked: false },
      { name: 'Post UnLike', id: 'three-cheese', isChecked: false },
      { name: 'Page UnLike', id: 'artichoke-hearts', isChecked: false },
      { name: 'Comment', id: 'onions', isChecked: false },
      { name: 'Post', id: 'green-pepper', isChecked: false },
      { name: 'Message', id: 'diced-tomatos', isChecked: false },  
      { name: 'Follow Tags', id: 'pineapple', isChecked: false },
      { name: 'Pref Python', id: 'python', isChecked: false },
      { name: 'Pref JavaScript', id: 'jscript', isChecked: false },
      { name: 'Other ', id: 'other', isChecked: false },
    ],
    instructions: '',
    quantity: ''
  }

  const [formState, setFormState] = useState(initialState);
  const [serverError, setServerError] = useState('')
  const [formValid, setFormValid] = useState(false)
  const [isButtonDisabled, setButtonDisabled] = useState(true)
  const [errors, setErrors] = useState(initialState)

  const formSchema = yup.object().shape({
    customer: yup.string().min(3, "Your name is required").required("Your name is required"),
    email: yup.string().min(10, "Your email is required").required("Your email is required"),
    size: yup.string().required("Please choose a Platform"),
    sauces: yup.array()
      .of(yup.object().shape({
        name: yup.string(),
        id: yup.string(),
        isChecked: yup.boolean()
      })),
    toppingsChecked: yup.array()
      .of(yup.object().shape({
        name: yup.string(),
        id: yup.string(),
        isChecked: yup.boolean()
      })),
    instructions: yup.string()
  })

  const validateChange = e => {
    const name = e.target.name;
    yup
      .reach(formSchema, e.target.name, e.target.type)
      .validate(e.target.value)
      .then(valid => {
        setErrors({ ...errors, [e.target.name]: "" })
      })
      .catch(err => {
        //console.log("OrderForm -> err", err)
        setErrors({ ...errors, [name]: err.errors })
      })
  }

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid)
      setFormValid(valid)
      console.log("OrderForm -> valid", valid)
    })
  }, [formState])

  const handleChange = e => {
    e.persist();
    let newFormState;
    if (e.target.type === 'checkbox') {
      newFormState = {
        ...formState,
        toppingsChecked: formState.toppingsChecked.map(item => {
          return (
            item.id === e.target.id ? {
              ...item, isChecked: !item.isChecked
            } : { ...item }
          )
        })
      }
    } else {
      newFormState = {
        ...formState, [e.target.name]: e.target.value, [e.target.email]: e.target.value
      }
    }
    validateChange(e)
    setFormState(newFormState)
  }

  const handleSubmit = e => {
    e.preventDefault();
    // axios({
    //   method: "POST", 
    //   url:"http://localhost:3002/send", 
    //   data:  formState
    // }).then((response)=>{
    //   if (response.data.status === 'success'){
    //     alert("Message Sent."); 
    //     this.resetForm()
    //   }else if(response.data.status === 'fail'){
    //     alert("Message failed to send.")
    //   }
    // })
    axios.post('https://reqres.in/api/users', formState)
      .then(res => {
        console.log(res.data)
        const data = {
          ...res.data,
          sauces: res.data.sauces.filter(sauce => sauce.isChecked === true),
          toppingsChecked: res.data.toppingsChecked.filter(toppings => toppings.isChecked === true),
        }
        setOrder([...order, data])
        setFormState(initialState)
      }
      )
      .catch(err => console.log(err))

  }

  return (
    <Form style={{ padding: '40px' }} onSubmit={e => handleSubmit(e)}>
      <Styledh3>Build Your Own Bot</Styledh3>
      <p><center>Fill out the <b>Form</b> below, click the [<b>Button</b>] then view [<b>Cart</b>] </center></p>
      <FormGroup>
        <legend>Your Name</legend>
        <Input type="text" placeholder="Your Name" value={formState.customer} onChange={e => handleChange(e)} name="customer" data-cy="customer" />
        {errors.customer ? (<Alert color="warning">{errors.customer}</Alert>) : null}
      </FormGroup>

      <FormGroup>
        <legend>Your Email</legend>
        <Input type="text" placeholder="user123@mail.com" value={formState.email} onChange={e => handleChange(e)} name="email" data-cy="email" />
        {errors.email ? (<Alert color="warning">{errors.email}</Alert>) : null}
      </FormGroup>

      <FormGroup>
        <legend>Select Platform</legend>
        <Input type="select" onChange={e => handleChange(e)} value={formState.size} name="size" data-cy="size">
          <option value="">Select Platform</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Other">Other</option>
        </Input>
        {errors.size ? (<Alert color="warning">{errors.size}</Alert>) : null}
      </FormGroup>


      <FormGroup check style={{ display: 'flex', flexDirection: 'column' }}>
        <legend>Choose Functions</legend>
        <StyledToppings>
          {formState.toppingsChecked.map(toppings => {
            return (
              <StyledLabel htmlFor={toppings.id}>
                <Input
                  type="checkbox"
                  checked={toppings.isChecked} name="toppingsChecked"
                  id={toppings.id}
                  data-cy={toppings.cypressTest}
                  onChange={e => handleChange(e)}
                />
                {toppings.name}
              </StyledLabel>
            )
          })}
        </StyledToppings>
      </FormGroup>

      <FormGroup>
        <legend>Instructions</legend>
        <Input type="text" name="instructions" value={formState.instructions} onChange={e => handleChange(e)} placeholder="Anything else you'd like to add?" />
      </FormGroup>
    
      <Button type="submit" data-cy="submit" disabled={isButtonDisabled} color="primary" >Prepare Request</Button>

    </Form>
  )
  
}
