import React from 'react'
import { render } from '@testing-library/react'
import { Layer } from './Layer'

describe('<Layer/>', () => {
  it('should render an empty Layer', () => {
    const { getByRole } = render(<Layer></Layer>)

    expect(getByRole('img')).toBeInTheDocument()
  })
})
