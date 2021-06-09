import React from 'react'
import { render } from '@testing-library/react'
import Header from '../Header'

test('Teste do header na tela Home', () => {
  const { getByText } = render(<Header />)
  const h1 = getByText(/Loja Virtual/)

  expect(h1).toBeInTheDocument()
})

test('Exibir cabeçalho com o título da categoria', () => {
  const { getByText } = render(<Header titulo='Loja Virtual - Categoria Android' />)
  const h1 = getByText(/Loja Virtual - Categoria Android/)

  expect(h1).toBeInTheDocument()
})

test('Visualizar a logo do site', () => {
  const { getByAltText } = render(<Header />)
  const img = getByAltText("Logo")

  expect(img).toBeInTheDocument()
  expect(img).toHaveAttribute('src', 'logo.png')
})

test('Validação de foto da tela', () => {
  const { getByTestId } = render(<Header />)
  const header = getByTestId('main-header')

  expect(header).toMatchSnapshot()
})