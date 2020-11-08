import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Service from './Service'

const component = (
  <Service reference="brushing_man" title="Coiffure Homme" duration={60} price={1000} onChange={() => null} />
)

describe('Test Service component', () => {
  test('Test title props', () => {
    render(component)
    expect(screen.getByRole('heading')).toHaveTextContent('Coiffure Homme')
  })
  test('Test duration props', () => {
    const { container } = render(component)

    expect(container.querySelectorAll('p')[0]).toHaveTextContent('1h')
    expect(container.querySelectorAll('p')[0]).not.toHaveTextContent('60 minutes')
  })
  test('Test price props', () => {
    const { container } = render(component)

    expect(container.querySelectorAll('p')[1]).toHaveTextContent('10€')
    expect(container.querySelectorAll('p')[1]).not.toHaveTextContent('1000 centimes')
  })
  test('Test count state', () => {
    const { container } = render(component)
    const minusBtn = screen.getAllByRole('button')[0]
    const plusBtn = screen.getAllByRole('button')[1]
    const counter = container.querySelectorAll('span')[1]

    expect(counter).toHaveTextContent('0')

    // Click on minus btn
    fireEvent.click(minusBtn)
    expect(counter).toHaveTextContent('0')

    // Click on minus btn
    fireEvent.click(plusBtn)
    fireEvent.click(plusBtn)
    expect(counter).toHaveTextContent('2')

    // Click on minus btn
    fireEvent.click(minusBtn)
    expect(counter).toHaveTextContent('1')
  })
})
