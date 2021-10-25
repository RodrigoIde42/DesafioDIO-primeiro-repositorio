import React from 'react';

const ButtonA = <button>Customers history</button>
const ButtonB = <button>Sign up customer</button>

const hasCustomer = false;

const App = () => {

    const renderShowHistory = () => (
        <div>
            <p>Click the button below to show customers history</p>
            {ButtonA}
        </div>
    )

    const renderSignUp = () => (
        <div>
            <p>Click the button below to sign up a new customer</p>
            {ButtonB}
        </div>
    )

    const renderCustomer = () => {
        if (!hasCustomer) return null

        return (
            <div>
                <h1>Customer's name: Rodrigo Ide</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>Digital Innovation One</h1>
            <p>Conditional Rendering</p>
            <br/>
            {hasCustomer ? renderShowHistory() : renderSignUp()}
            <br/>
            <div>
                {renderCustomer()}
            </div>
        </div>
    );
};

export default App;