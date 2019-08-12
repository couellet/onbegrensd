import React, { Component } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`

const Field = styled.div`
  width: 50vw;
  margin-bottom: 40px;
  caret-color: #000;

  label {
    display: block;
  }

  input {
    background: #fff;
    color: #000;
    width: 100%;
    height: 50px;
    box-shadow: none;
    border: 3px solid #000;
    padding: 5px;
    outline: none;
  }

  textarea {
    background: #fff;
    color: #000;
    width: 100%;
    height: 100px;
    resize: none;
    box-shadow: none;
    border: 3px solid #000;
    padding: 5px;
    outline: none;
  }
`
const StyledButton = styled.button`
  background: ${props => (props.verzonden ? '#0ad266' : '#000')};
  color: ${props => (props.verzonden ? '#000' : '#fff')};
  width: 100%;
  height: 40px;
  border: none;
  cursor: pointer;
  outline: none;
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    verzonden: false,
    buttonText: 'Verzenden',
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        this.setState({
          verzonden: !this.state.verzonden,
          buttonText: 'VERZONDEN!',
        })
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message, buttonText, verzonden } = this.state

    return (
      <>
        <StyledForm
          method="post"
          onSubmit={this.handleSubmit}
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />

          <Field>
            <label htmlFor="name">Naam</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              required
            />
          </Field>

          <Field>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </Field>

          <Field>
            <label htmlFor="message">Bericht</label>
            <textarea name="message" onChange={this.handleChange} required />
          </Field>

          <Field>
            <StyledButton type="submit" verzonden={verzonden}>
              {buttonText}
            </StyledButton>
          </Field>
        </StyledForm>
      </>
    )
  }
}

export default ContactForm
