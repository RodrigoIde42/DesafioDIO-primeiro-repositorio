import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

export default function GithubProvider({ children }) {

    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            login: undefined,
            name: undefined,
            htmlUrl: undefined,
            blog: undefined,
            bio: undefined,
            location: undefined,
            company: undefined,
            avatarUrl: undefined,
            followers: 0,
            following: 0,
            publicGists: 0,
            publicRepos: 0,
        },
        repositories: [],
        starred: [],
    });

    const getUser = (username) => {
        api.get(`users/${username}`).then(({ data: { user } }) => {
            setGithubState(prevState => ({
                ...prevState, 
                user: {
                    login: user.login,
                    name: user.name,
                    htmlUrl: user.html_url,
                    blog: user.blog,
                    bio: user.bio,
                    location: user.location,
                    company: user.company,
                    avatarUrl: user.avatar_url,
                    followers: user.followers,
                    following: user.following,
                    publicGists: user.public_gists,
                    publicRepos: user.public_repos,
                },
                loading: false,
            }))
        })
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
    }

    return (
        <GithubContext.Provider
          value={contextValue}
        >
            {children}            
        </GithubContext.Provider>
    )
}
