import { useContext } from 'react';
import { GithubContext } from '../providers/GithubProvider';

export const useGithub = () => {
    const { githubState, getUser } = useContext(GithubContext);
    return { githubState, getUser };
};