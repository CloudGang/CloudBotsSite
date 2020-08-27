import React from 'react'
import { NavLink, Link } from "react-router-dom"
import styled from 'styled-components'

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`
const styledLink = {
  padding: '10px 30px',
  backgroundColor: '#28a745',
  color: 'white',
}

export default function Nav() {
  return (
    <StyledNav>
      <Link to="/">
        <h4 style={{ color: '#28a745', textTransform: 'uppercase' }}>Cloud Bots™</h4>
      </Link>
      <div>
        <Link to="/shop" style={styledLink} >Shop</Link>
        <Link to="/order" style={styledLink} data-cy="orderLink">Build-A-Bot</Link>
        <Link to="/cart" style={styledLink} data-cy="cartLink">Cart</Link>
      </div>
    </StyledNav>
  )
}
