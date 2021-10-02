import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '.'

test('renders HomePage successfully', () => {
  render(<HomePage />)
  const linkElement = screen.getByTestId('renderSuccessfully')
  expect(linkElement).toBeInTheDocument()
})
