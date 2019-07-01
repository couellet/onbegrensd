import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
  position: fixed;
  width: 150px;

  ul {
    list-style: none;
    text-decoration: none;
    padding: 0;
    li {
      margin: 20px 40px 0;
      font-size: 1.2em;
      a {
        color: #000;
        outline: none;
        font-weight: 700;
        transition: all 0.5s ease-in-out;
        &:hover {
          cursor: pointer;
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
`

const navList = [
  {
    name: 'T-shirts',
    link: '/heren/tshirts',
  },
  {
    name: 'Sweaters',
    link: '/heren/sweaters',
  },
  {
    name: 'Hoodies',
    link: '/heren/hoodies',
  },
]

const navListItems = navList.map((item, index) => (
  <li key={index}>
    <Link
      to={item.link}
      activeStyle={{ backgroundColor: '#000', color: '#FFF' }}
    >
      {item.name}
    </Link>
  </li>
))

const HerenSubNav = () => (
  <>
    <Nav>
      <ul>{navListItems}</ul>
    </Nav>
  </>
)

export default HerenSubNav
