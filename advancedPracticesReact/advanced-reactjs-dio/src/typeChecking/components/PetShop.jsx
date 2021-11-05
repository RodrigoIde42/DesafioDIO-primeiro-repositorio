import React, { memo } from 'react';
import PropTypes from 'prop-types';

function PetShop (props) {

    const { dogs, cats, customers, customerName, onClick } = props;

    return (
        <>
            <h2>Dogs: {dogs}</h2>
            <h3>Cats: {cats}</h3>
            <span>
                Customers quantity: {customers}
            </span>
            <br />
            <span>
                Customer name: {customerName}
            </span>
            <br />
            <button onClick={onClick}>Start bath</button>
        </>
    );
}

PetShop.defaultProps = {
    cats: 0,
    customers: [],
}

PetShop.propTypes = {
    dogs: PropTypes.number.isRequired,
    cats: PropTypes.number,
    customers: PropTypes.array,
    customerName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    status: PropTypes.oneOf(['Completed', 'Disabled']),
}

export default memo(PetShop);