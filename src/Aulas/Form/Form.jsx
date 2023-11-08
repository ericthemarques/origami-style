import React from 'react'
import Inputs from './Inputs'
import Button from './Button'

const Form = () => {
  return (
    <form>
        <p>
            <label htmlFor='nome'>Nome</label>
            <Inputs />
        </p>
        <p>
            <label htmlFor='mail'>E-mail</label>
            <Inputs />
        </p>
        <Button />
    </form>
  )
}
// p por padrão vai dar um espaçamento, com isso fica melhor a visualização

export default Form