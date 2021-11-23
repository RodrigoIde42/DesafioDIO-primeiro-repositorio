import React from 'react'
import { useGithub } from '../../hooks/GithubHooks'
import * as S from './styled'

export default function Profile() {

    const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <S.WrapperAvatar
            src={githubState.user.avatarUrl}
            alt="GitHub Avatar" 
            />
            <S.WrapperInfoUser>
                <h1>{githubState.user.name}</h1>
                <S.WrapperUsername>
                    <h3>Username: </h3>
                    <a 
                      href={githubState.user.htmlUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                        {githubState.user.login}
                    </a>
                </S.WrapperUsername>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers: </h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Following: </h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists: </h4>
                        <span>{githubState.user.publicGists}</span>
                    </div>
                    <div>
                        <h4>Repositories: </h4>
                        <span>{githubState.user.publicRepos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}
