import React, { useContext } from 'react';
import Input from './components/Input';
import { ThemeContext } from './Theme';

export default function Form() {

    const context = useContext(ThemeContext);

    const renderForm = (
        <div>
            <h1>Form</h1>
            <form>
                <table>
                    <tbody>
                        <Input>Name: </Input>
                        <Input>Email: </Input>
                        <Input>Age: </Input>
                        <Input>Phone number: </Input>
                    </tbody>
                </table>
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