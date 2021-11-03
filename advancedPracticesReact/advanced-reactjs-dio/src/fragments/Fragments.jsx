import React, { Fragment } from 'react';
import Column from './components/Column';

const store = ['', '', '']

export default function Fragments() {

    const renderColumns = (element, key) => (
        <Fragment key={`column-${key}`}>
            <Column />
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