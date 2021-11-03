import React from 'react';

export default function Column({type}) {
    return (
        <tr>
            <td>{type.name.console}</td>
        </tr>
    )
}