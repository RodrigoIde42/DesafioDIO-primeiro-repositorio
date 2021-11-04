import React, { useContext } from 'react';
import { ThemeContext } from './Theme';
import Form from './Form';

export default function Card() {

    const theme = useContext(ThemeContext);
    console.log('theme:values', theme);

    return (
        <div>
            <Form />
            <button style={{ background: theme.background, color: theme.color }}>Card Button</button>
        </div>
    )
}