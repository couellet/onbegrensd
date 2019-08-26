import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import { Location } from '@reach/router'

import Header from '../components/Header'
import Footer from '../components/Footer'
import DamesSubNav from './DamesSubNav'
import HerenSubNav from './HerenSubNav'
import KidsSubNav from './KidsSubNav'

import nl from '../data/nl'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', sans-serif;
    ${'' /* min-height: calc(100vh - 10px); */}
    display: block;
    position: relative;
    border-top: none;
    border-left: 5px solid #000;
    border-right: 5px solid #000;
    border-bottom: 5px solid #000;
    background: #FFF;
    color: #000;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: #FFF;
    outline: none;
  }

  input, textarea, button {
    font-family: inherit;
  }


`

const StyledMain = styled.main`
  min-height: calc(100vh - 389px);
  padding: 50px 50px 0 50px;
`

document.addEventListener('snipcart.ready', () => {
  window.Snipcart.setLang('nl');
});

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'viewport',
              content:
                'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
            },
            {
              name: 'description',
              content:
                'Onbegrensd is een webshop met custom made T-shirts en Hoodies',
            },
            {
              name: 'keywords',
              content:
                'Webshop, Onbegrensd, Kledij, Kleding, Kleren, Clothing, Onbegrensd.xyz',
            },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Rajdhani:300,400,700"
            rel="stylesheet"
          />
          <html lang="nl" />
        </Helmet>
        <Header />
        <Location>
          {({ location }) => {
            switch (location.pathname) {
              case '/dames':
              case '/dames/tshirts':
              case '/dames/topjes':
              case '/dames/sweaters':
              case '/dames/hoodies':
                return <DamesSubNav />
              case '/heren':
              case '/heren/tshirts':
              case '/heren/sweaters':
              case '/heren/hoodies':
                return <HerenSubNav />
              case '/kids':
              case '/kids/tshirts':
              case '/kids/sweaters':
              case '/kids/hoodies':
                return <KidsSubNav />
              default:
                return null
            }
          }}
        </Location>
        <StyledMain>{children}</StyledMain>
        <Footer />
        <GlobalStyle />
      </>
    )}
  />
)

export default Layout
