import { render, screen } from '@testing-library/react';
import App from './app';

describe('App', () => {
  test('render a link with text "learn react"', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});