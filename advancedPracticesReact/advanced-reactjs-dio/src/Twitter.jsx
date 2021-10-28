import React, { Component } from 'react';

class Twitter extends Component {
    
    state = {
        post: 'text'
    }

    componentDidMount () {
        const {tweets, loading} = this.props;
        console.log('componentDidMount', tweets);
        console.log('componentDidMount:loading', loading);
    }

    componentDidUpdate (prevProps) {
        const {loading} = this.props;
        if (this.props.loading !== prevProps.loading) {
            console.log('componentDidUpdate:loading', loading);
        }
    }

    componentWillUnmount () {
        console.log('componentWillUnmount: was removed :c');
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.state.post !== nextState.post;
    }

    post = () => {
        this.setState({
            post: true
        })
    }

    render () {

        const {tweets} = this.props;
        console.log('render', tweets);

        return (
            <div>
                <button onClick={this.post}>Re-render</button>
                Test
            </div>
        )
    }
}

export default Twitter;