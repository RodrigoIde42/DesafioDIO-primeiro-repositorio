import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

export default function Quotes({ quote, author }) {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Author>- {author}</Author>
            <button>Quote Point</button>
        </Wrapper>
    )
}

Quotes.propTypes = {
    quote: string,
    author: string
}

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`

const Author = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`