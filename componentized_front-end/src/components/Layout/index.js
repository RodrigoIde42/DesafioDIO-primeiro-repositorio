import React from 'react';
import * as S from './styled';

export default function Layout({children}) {
    return (
        <S.WrapperLayout>
            <header>header</header>
            {children}
        </S.WrapperLayout>
    )
}