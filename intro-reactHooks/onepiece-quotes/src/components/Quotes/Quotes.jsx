import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import Button from '../Button/Button';

export default function Quotes({ quote, author, onUpdate }) {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Author>- {author}</Author>
            <Button onClick={onUpdate}>Quote Point</Button>
        </Wrapper>
    )
}

Quotes.propTypes = {
    quote: string,
    author: string,
    onUpdate: func
}

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    color: #fff;
`

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`

const Author = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`