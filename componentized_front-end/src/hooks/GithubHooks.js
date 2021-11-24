import { useContext } from 'react';
import { GithubContext } from '../providers/GithubProvider';

export const useGithub = () => {
    const { githubState, getUser, getUserRepos, getUserStarred } = useContext(GithubContext);
    return { githubState, getUser, getUserRepos, getUserStarred };
};