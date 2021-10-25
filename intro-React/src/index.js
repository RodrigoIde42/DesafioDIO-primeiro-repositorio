import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import "./styles.css"

const element = 'Digital Innovation'
const element2 = <h1>Hello World</h1>

function sum(a, b) {
    return a + b;
}

function firstJSX() {
    return(
        <div className="test">
            <h1>Introduction to ReactJS</h1>
            <h2>Sum of 10 and 20 = {sum(10, 20)}</h2>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            <div className="elements">
                {element}
                {element2}
            </div>
            {firstJSX()}
            <Button onClick={() => alert('5 + 5 = '+ sum(5, 5))} name="Rodrigo Ide"/>
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => alert('1000 - 7 = ' + sum(1000, -7))} name="Button"/>
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)