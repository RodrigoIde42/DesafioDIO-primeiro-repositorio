import React, { memo } from 'react';

export default memo(function Column({type}) {
    return (
        <tr>
            <td>{type}</td>
        </tr>
    )
})