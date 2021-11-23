import React from 'react'
import * as S from './styled'

export default function Profile() {
    return (
        <S.Wrapper>
            <S.WrapperAvatar
            src="https://avatars.githubusercontent.com/u/79595870?v=4"
            alt="GitHub Avatar" 
            />
            <S.WrapperInfoUser>
                <h1>Rodrigo Ide</h1>
                <S.WrapperUsername>
                    <h3>Username: </h3>
                    <a 
                      href="https://github.com/RodrigoIde42"
                      target="_blank"
                      rel="noreferrer"
                    >
                        RodrigoIde42
                    </a>
                </S.WrapperUsername>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers: </h4>
                        <span>10</span>
                    </div>
                    <div>
                        <h4>Starred: </h4>
                        <span>10</span>
                    </div>
                    <div>
                        <h4>Following: </h4>
                        <span>10</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}
