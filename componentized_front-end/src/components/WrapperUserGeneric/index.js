import React from 'react';
import * as S from './styled';

export default function WrapperUserGeneric({ h3Value, info }) {
    return (
        <S.WrapperUserGeneric>
            <h3>{h3Value}</h3>
            <span>{info}</span>
        </S.WrapperUserGeneric>
    )
}
