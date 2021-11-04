import React from 'react';
import PropType from 'prop-types';

export default function Calc (props) {

    const { min, max, onChange } = props  

    return (
        <>
            <span>Min value: {min}</span>
            <br />
            <span>Max value: {max}</span>
            <br />
            <input type="text" onChange={onChange} />
        </>
    )
}

Calc.propTypes = {
    min: PropType.number.isRequired,
    max: PropType.number.isRequired,
    onChange: PropType.func.isRequired
}