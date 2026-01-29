import {render, screen} from '@testing-library/react'
import App from './App'

test('renders Money Manager heading', () => {
  render(<App />)
  expect(screen.getByText(/money manager/i)).toBeInTheDocument()
})
