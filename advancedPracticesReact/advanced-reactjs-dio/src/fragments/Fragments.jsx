import React, { Fragment } from 'react';
import Column from './components/Column';

const store = [{
    type: 'Clothes'
},
{
    type: 'Footwear'
},
{
    type: 'T-shirt'
}]

export default function Fragments() {

    const renderColumns = (element, key) => (
        <Fragment key={`column-${key}`}>
            <Column type={element.type}/>
        </Fragment>
    )

    return (
        <>
            <h1>Fragments</h1>
            <table>

                    {store.map(renderColumns)}

            </table>
        </>
    )
}