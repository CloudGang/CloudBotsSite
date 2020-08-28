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
  
`

export default function Home() {
  return (
    <StyledContainer>
      <StyledImgContainer>
        <center>
        <h1 id="Title">"Automate Everything"</h1>
        </center>
        <Link to="/shop">
          <img id="BG" src={BG} />
          <br/>
          <center>
            <Button color="success" style={{ padding: '5px 30px', borderRadius: '0', align: 'center' }}>ENTER</Button>
          </center>
        </Link>
      </StyledImgContainer>
    </StyledContainer>
  )
}
