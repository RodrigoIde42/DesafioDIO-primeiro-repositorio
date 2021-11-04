import React, { useState } from 'react';
import Button from './components/Button';
import Calc from './components/Calc';

export default function DumbComponents() {

    const [value, setValue] = useState(0)
    const [min, setMin] = useState(0)
    const [max, ] = useState(30)

    const handleClick = () => {
        console.log("Added in Cart")
        setMin(10)
    }

    const handleCalc = ({ target }) => {
        let value = 0
        if (target.value !== '') {
            value = parseInt(target.value)
        }
        setValue(min + max + value)
    }

    return (
        <>
            <div>
                <h1>Dumb Components</h1>
                <Button
                    onClick={handleClick}
                >
                    Add to Cart
                </Button>
            </div>
            <div>
                <h1>Calculated value: {value}</h1>
                <Calc
                    min={min}
                    max={max}
                    onChange={handleCalc} 
                />
            </div>
        </>
    )
}