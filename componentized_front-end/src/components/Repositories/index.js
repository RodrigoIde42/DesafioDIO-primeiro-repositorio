import React, { useEffect, useState } from 'react';
import { useGithub } from '../../hooks/GithubHooks';
import RepositoryItem from '../RepositoryItem';
import * as S from './styled';

export default function Repositories() {

    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

    useEffect(() => {
      if(githubState.user.login){
        getUserRepos(githubState.user.login);
        getUserStarred(githubState.user.login);
      }
      setHasUserForSearchRepos(githubState.repositories);
    }, [githubState.user.login, getUserRepos, getUserStarred, githubState.repositories])

    return (
      <>
      {hasUserForSearchRepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
              <S.WrapperList>
                { githubState.repositories.map(item => (
                  <RepositoryItem 
                    key={item.id}
                    name={item.name}
                    fullname={item.full_name}
                    linkToRepo={item.owner.html_url} 
                  />
                ))}
              </S.WrapperList>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
              <S.WrapperList>
                { githubState.starred.map(item => (
                  <RepositoryItem
                    key={item.id} 
                    name={item.name}
                    fullname={item.full_name}
                    linkToRepo={item.owner.html_url}
                  />
                ))}
              </S.WrapperList>
            </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        null
      ) 
    }
    </>
    )
}
