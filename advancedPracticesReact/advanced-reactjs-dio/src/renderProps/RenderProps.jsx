import React, { Component } from 'react';
import Counter from './components/Counter';

const Buttons = ({ increment, decrement, count }) => (
    <div>
        <h1>Actual value: {count}</h1>
        <button onClick={increment}>Increment +1</button>
        <button onClick={decrement}>Decrement -1</button>
    </div>
)

export default class RenderProps extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}