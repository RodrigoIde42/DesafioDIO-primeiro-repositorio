import { render, screen, fireEvent } from '@testing-library/react';
import Quotes from './Quotes';

const quote = 'test quote';
const author = 'random author';

test('renders received quote, author and a button', () => {
    render(<Quotes quote={quote} author={author} />);

    const quoteEl = screen.getByText(quote);
    const authorEl = screen.getByText(`- ${author}`);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(authorEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
})

test('calls a callback when button is pressed', () => {
    const callback = jest.fn();

    render(<Quotes quote={quote} author={author} onUpdate={callback} />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    expect(callback).toHaveBeenCalled();
})