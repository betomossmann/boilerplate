import React from 'react'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import Home from './page'

describe('Page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<Home />)

      const heading = screen.getByRole('heading', {
        name: /Create Bdev App/
      })

      expect(heading).toBeInTheDocument()
    })

    it('renders a heading', () => {
      render(<Home />)

      const heading = screen.getByRole('heading', { level: 1 })

      expect(heading).toBeInTheDocument()
    })

    it('Should have Home Page text', () => {
      render(<Home />)
      expect(screen.getByText('Home Page')).toBeInTheDocument()
    })
  })
})
