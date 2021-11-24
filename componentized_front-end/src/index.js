import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ResetCSS } from './global/ResetCSS';
import GithubProvider from './providers/GithubProvider';

const Main = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>
        </main>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));
