import React from 'react';
import RepositoryItem from '../RepositoryItem';
import * as S from './styled';

export default function Repositories() {
    return (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem 
                  name="DesafiosDIO"
                  fullname="RodrigoIde42/DesafiosDIO" 
                  linkToRepo="https://github.com/RodrigoIde42/DesafiosDIO" 
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem 
                  name="livro-receitas"
                  fullname="RodrigoIde42/livro-receitas"
                  linkToRepo="https://github.com/RodrigoIde42/livro-receitas"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}
