import React from 'react';
import Layout from './components/Layout';
import NoUserSearched from './components/NoUserSearched';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import { useGithub } from './hooks/GithubHooks';

function App() {

  const { githubState } = useGithub();

  return (
    <Layout>
      { githubState.hasUser ?
      <>
        { githubState.loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}
      </> :
        <NoUserSearched />
      }
    </Layout>
  );
}

export default App;