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
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
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
        setGithubState(prevState => ({
            ...prevState,
            loading: !prevState.loading
        }))
        api.get(`users/${username}`).then(({ data }) => {
            setGithubState(prevState => ({
                ...prevState,
                hasUser: true,
                user: {
                    id: data.id,
                    login: data.login,
                    name: data.name,
                    htmlUrl: data.html_url,
                    blog: data.blog,
                    location: data.location,
                    company: data.company,
                    avatarUrl: data.avatar_url,
                    followers: data.followers,
                    following: data.following,
                    publicGists: data.public_gists,
                    publicRepos: data.public_repos,
                }
            }));
        }).finally(() => {
            setGithubState(prevState => ({
                ...prevState,
                loading: !prevState.loading
            }))
        })
    }

    const getUserRepos = (username) => {
        api.get(`users/${username}/repos`).then(({ data }) => {
          setGithubState((prevState) => ({
            ...prevState,
            repositories: data,
          }));
        });
    };
    
    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({ data }) => {
          setGithubState((prevState) => ({
            ...prevState,
            starred: data,
          }));
        });
    };

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    }

    return (
        <GithubContext.Provider
          value={contextValue}
        >
            {children}            
        </GithubContext.Provider>
    )
}
