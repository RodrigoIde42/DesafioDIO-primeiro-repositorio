import React, { useContext } from 'react';
import { ThemeContext } from './Theme';

export default function Form() {

    const context = useContext(ThemeContext);

    const renderForm = (
        <div>
            <h1>Form</h1>
            <form>
                <label>Name: </label>
                <input />
                <label>Email: </label>
                <input />
                <label>Age: </label>
                <input />
                <label>Phone number: </label>
                <input />
            </form>
        </div>
    )

    const renderNotLogged = (
        <h1>You are not logged in</h1>
    )

    return (
        <div>
            {context.token ? renderForm : renderNotLogged}
        </div>
    )
}