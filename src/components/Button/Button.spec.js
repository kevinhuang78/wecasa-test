import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './index'
import { colors } from 'style/variables'

const primaryTheme = `background-color: ${colors.primary}; border: 1px solid ${colors.white}; color: ${colors.white};`
const secondaryTheme = `background-color: ${colors.blue}; border: 1px solid ${colors.white}; color: ${colors.white};`

describe('Test Service component', () => {
  test('Test children props and CSS', () => {
    render(<Button>Submit</Button>)
    const btn = screen.getByRole('button')

    expect(btn).toHaveTextContent('Submit')
    expect(btn).toHaveStyle(secondaryTheme)
    expect(btn).not.toHaveStyle(primaryTheme)
  })
  test('Test type primary props for CSS', () => {
    render(<Button type="primary">Continue</Button>)
    const btn = screen.getByRole('button')

    expect(btn).toHaveTextContent('Continue')
    expect(btn).toHaveStyle(primaryTheme)
    expect(btn).not.toHaveStyle(secondaryTheme)
  })
})
