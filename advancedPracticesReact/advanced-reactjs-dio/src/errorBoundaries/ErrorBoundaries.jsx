import React, { Component } from 'react';
import errorImg from './image/error.png';

export default class ErrorBoundary extends Component {

    constructor (props) {
        super(props);
        this.state = { 
            hasError: false 
        };
    }

    componentDidCatch (error, errorInfo) {
        this.setState({ 
            hasError: true 
        });
    }

    render () {
        if (this.state.hasError) {
            return <img src={errorImg} alt="error" />;
        }
        return this.props.children;
    }
}