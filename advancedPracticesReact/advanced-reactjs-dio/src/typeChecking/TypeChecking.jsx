import React from 'react';
import PetShop from './components/PetShop';

export default function TypeChecking() {

    const handleClick = () => {
        console.log('Starting bath...');
    }

    return (
        <>
            <h1>Type Checking</h1>
            <PetShop
                dogs={2}
                customerName="Rodrigo Ide"
                onClick={handleClick}
                status="Completed"
            />
        </>
    )
}