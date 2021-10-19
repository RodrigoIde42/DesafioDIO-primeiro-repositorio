import React from 'react'
import ReactDOM from 'react-dom'
import "./styles.css"

function sum(a, b) {
    return a + b;
}

function firstJSX() {
    return(
        <div className="test">
            <h1>Rodrigo Ide - Introduction to ReactJS</h1>
            <h2>Sum of 10 and 20 = {sum(10, 20)}</h2>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            <h1>Hello World</h1>
            {firstJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)