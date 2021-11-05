import React, { Component } from 'react';
import Counter from './components/Counter';

const Buttons = ({ increment, decrement, count }) => (
    <>
        <h1>Actual value: {count}</h1>
        <button onClick={increment}>Increment +1</button>
        <button onClick={decrement}>Decrement -1</button>
    </>
)

export default class RenderProps extends Component {
    render() {
        return (
            <>
                <Counter
                    render = {
                        ({ increment, decrement, count }) => (
                            <Buttons 
                                increment={increment} 
                                decrement={decrement} 
                                count={count} 
                            />
                        )
                    } 
                >
                </Counter>
            </>
        );
    }
}