import React from 'react'

import styled from 'styled-components'

import BG from '../Assets/cb.png'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const StyledContainer = styled.div`
  overflow: hidden;
`

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100vw;
  background: url(${BG}) center no-repeat;
    Button{
    margin-top: 400px;
  }
  div:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color:black;
    background-image:url(http://i.stack.imgur.com/xQi3T.png);
    background-position: -21px -35px;
    background-repeat:repeat;
    filter: invert(100%);
    -webkit-filter: invert(100%);
}
`

export default function Home() {
  return (
    <StyledContainer>
      <StyledImgContainer>
        <h1>"Automate Everything"</h1>
        <Link to="/order">
          <Button color="success" style={{ padding: '5px 30px', borderRadius: '0' }}>ENTER</Button>
        </Link>
        {/* <StyledImg /> */}
      </StyledImgContainer>
    </StyledContainer>
  )
}
