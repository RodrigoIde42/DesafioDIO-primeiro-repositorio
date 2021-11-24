import React from 'react';
import * as S from './styled';

export default function RepositoryItem({name, fullname, linkToRepo}) {
    return (
        <S.Wrapper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
            <S.WrapperFullName>Full name:</S.WrapperFullName>
            <S.WrapperLink
              href={linkToRepo}
              target="_blank"
              rel="noreferrer"
            >
                {fullname}
            </S.WrapperLink>
        </S.Wrapper>
    )
}
