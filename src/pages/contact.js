import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Form from '../components/ContactForm'

const StyledH1 = styled.h1`
  text-align: center;
`

const ContactPage = () => (
  <Layout>
    <StyledH1>Contact</StyledH1>
    <Form />
  </Layout>
)

export default ContactPage
