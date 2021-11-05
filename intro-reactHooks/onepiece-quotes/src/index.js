import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import App from './pages/App';

const app = (
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));
