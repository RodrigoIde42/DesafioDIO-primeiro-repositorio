import React from 'react';

export default function Input({children}) {
    return (
        <tr>
            <td>
                <label>{children}</label>
            </td><td>
                <input />
            </td>
        </tr>
    )
}