import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app with a quote, an author, a button and an image', () => {
    render(<App />);

    const textEl = screen.getByText(/random author/);
    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');

    expect(textEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
});