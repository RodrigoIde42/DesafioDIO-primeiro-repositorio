import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

export default function Button({ children, onClick }) {
    return <StyledButton onClick={onClick} >{children}</StyledButton>;
}

Button.propTypes = {
    children: string.isRequired,
}

const StyledButton = styled.button`
    background: #105edd;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 0.5em 1em;
    font-family: 'Graduate', cursive;
    cursor: pointer;
    box-shadow: #333, 3px, 3px;

    &:hover {
        background: #0b3075;
        color: #58acf4;
    }
`;