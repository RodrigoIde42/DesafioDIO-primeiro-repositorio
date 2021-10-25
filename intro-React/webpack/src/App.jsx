import React from 'react';

const ButtonA = <button>Customers history</button>
const ButtonB = <button>Sign up customer</button>

const hasCustomer = true;

const customer = [
    {
        id: 1,
        name: 'Rodrigo Ide',
        skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
        id: 2,
        name: 'Juan Perez',
        skills: ['HTML', 'React Native', 'Go', 'JS']
    },
    {
        id: 3,
        name: 'Maria Rodriguez',
        skills: ['Assembly']
    },
    {
        id: 4,
        name: 'Pedro Martinez',
        skills: ['Reason']
    }
]

const App = () => {

    const renderShowHistory = (
        <div>
            <p>Click the button below to show customers history</p>
            {ButtonA}
        </div>
    )

    const renderSignUp = (
        <div>
            <p>Click the button below to sign up a new customer</p>
            {ButtonB}
        </div>
    )

    const renderCustomers = (customer) => {
        if (hasCustomer) {
            return (
                <div key={`customer-${customer.id}`}>
                    <li>
                        {customer.name}
                    </li>
                    {customer.skills.map(renderSkills)}
                </div>
            )
        }
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{paddingLeft: '30px'}} key={`skill-${index}`}>
                <li>
                    {skill}
                </li>
            </div>
        )
    }

    return (
        <div>
            <h1>Digital Innovation One</h1>
            <p>Conditional Rendering</p>
            <br/>
            {hasCustomer ? renderShowHistory : renderSignUp}
            <br/>
            <div>
                    {customer.map(renderCustomers)}
            </div>
        </div>
    );
};

export default App;