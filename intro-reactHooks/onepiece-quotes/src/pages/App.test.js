import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const response = { author: 'Author', quote: 'Quote test' };

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a quote, an author, a button and an image', () => {
    render(<App />);

    const textEl = screen.getByText(/random author/);
    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');

    expect(textEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
});

test('calls an API on button click then update its text', async () => {
    render(<App />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    const quoteEl = await screen.findByText(response.quote);
    const authorEl = await screen.findByText(`- ${response.author}`);

    expect(quoteEl).toBeInTheDocument();
    expect(authorEl).toBeInTheDocument();
})