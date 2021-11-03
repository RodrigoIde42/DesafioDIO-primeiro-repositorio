import React from 'react';

export default function Input({children}) {
    return (
        <>
            <td>
                <label>{children}</label>
            </td><td>
                <input />
            </td>
        </>
    )
}