import React from 'react'
import { FormGroup, Input, Button, Alert } from 'reactstrap'
import styled from 'styled-components'
import img2 from "../Assets/cb.png"

const Form = styled.form`
  max-width: 650px;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  margin: 60px auto;
  border: 2px solid black;
  padding: 10px;

  h3{
    text-align: center;
  }

  img{
    width: 200px;
    transition: 0.4s;
  }
  img:hover{
    filter: invert(100%);
  }

  #topdesc{
    margin-top: 40px;
    margin-left: -100px;
  }

  #desc{
    width: 200px;
    text-align: center;
  }

  .form-group{
    width: 270px;
    padding: 50px;
    align-items: center;
    align-content:center;
  }

  FormGroup {
    border:solid;
    margin: 150px;
    width: 200px;
  }
  FormGroup:nth-child(1) {
    margin-bottom:auto;
    margin-right:auto;
    order:0;
  }
  FormGroup:nth-child(2) {
    margin-bottom:auto;
    margin-left:auto;
    order:0;
  }
  
  FormGroup:nth-child(3) {
    margin-top:auto;
    margin-right:auto;
    order:2;
  }
  FormGroup:nth-child(4) {
    margin-top:auto;
    margin-left:auto;
    order:2;
  }
`


export default function Shop() {

  return (
    <Form style={{ padding: '40px' }} >
      
      <h3>Shop Premade Bots</h3>
      
      <p id="topdesc">Choose from various <b>Bots</b> below.</p>
      
      <FormGroup>
          <legend>SupremeDM</legend>
          <img src={img2} alt="SupremeDM"/>
          <br/>
          <a href='https://www.fatfreecartpro.com/i/zwdt?card' style={{"display":"inline-block","background":"rgb(40, 167, 69) url(https://www.e-junkie.com/ej/images/newviewproduct.png) center/110px no-repeat","border":"none","padding":"7px 98px","borderRadius":"3px","textDecoration":"none"}}>&nbsp;</a>
          <p id="desc">
            
              Hey <b>#Instagrammers</b> Check out <b>#SupremeDM</b>!
              Continue or Start your <b>#instagram</b> messages from your PC, Share Video, Voice Notes & Photo's, Manage users who don't Follow Back & More! A great tool for business!
              SupremeDM Currently only available for <b>#Windows</b> OS

              3 Versions Available for <a href="https://supremedm.e-junkie.com/">Download Now!</a>
          
          </p>
      </FormGroup>

      <FormGroup>
          <legend>SupremeGram</legend>
          <img src={img2} alt="SupremeDM"/>
          <br/>
          <a href='https://www.fatfreecartpro.com/i/zxj4?card' style={{"display":"inline-block","background":"rgb(40, 167, 69) url(https://www.e-junkie.com/ej/images/newviewproduct.png) center/110px no-repeat","border":"none","padding":"7px 98px","borderRadius":"3px","textDecoration":"none"}}>&nbsp;</a>
            <p id="desc">

              New <b>#Instagram</b> <b>#Bots</b> for your <b>#Desktop</b> 
              Automates <b>#Likes</b>, <b>#Comments</b> & Follows so you don't have to. 
              Watch your Likes & <b>#Followers</b> increase while you do nothing!
              v1 & v2 Available for <a href="https://supremedm.e-junkie.com/">#Download now!</a>
            
            </p>
      </FormGroup>

      <FormGroup>
          <legend>AMFaster</legend>
          <img src={img2} alt="AMF-IG"/>
          <br/>
          <a href='https://www.fatfreecartpro.com/i/zwdt?card' style={{"display":"inline-block","background":"rgb(40, 167, 69) url(https://www.e-junkie.com/ej/images/newviewproduct.png) center/110px no-repeat","border":"none","padding":"7px 98px","borderRadius":"3px","textDecoration":"none"}}>&nbsp;</a>
          <p id="desc">
              New <b>AddMeFast</b> <b>#Bots</b> for your <b>#Desktop</b>!
              Automates <b>#Likes</b> on AddMeFast.com so you don't have to. 
              Watch your Likes & <b>#Followers</b> increase while you do nothing!
              v1(IG) & v2(YT) Available for <a href="https://supremedm.e-junkie.com/">#Download now!</a>
          </p>
      </FormGroup>
      
    </Form>
  )
  
}
