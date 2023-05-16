import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders github link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Visit biki's github/i);
  expect(linkElement).toBeInTheDocument();
});
