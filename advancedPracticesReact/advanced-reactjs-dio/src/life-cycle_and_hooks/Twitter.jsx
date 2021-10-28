import React, { useEffect, useState, memo } from 'react';

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading;
};

function Twitter(props) {

    const { loading } = props;
    const [ tweet, setTweet ] = useState('text');

    // componentDidMount
    useEffect(() => {
        const {tweets, loading} = props;
        console.log('useEffect', tweets);
        console.log('useEffect:loading', loading);
    })

    // componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate', loading);
    }, [loading])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount: was removed :c');
        }
    }, [])

    const handleTweet = () => {
        setTweet('Tweeted!');
    }

    console.log('new tweet >> ', tweet);

    return (
        <div>
            <button onClick={handleTweet}>Re-render</button>
            Test
        </div>
    )
}

export default memo(Twitter, areEqual);