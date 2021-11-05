import React from 'react';
import styled from 'styled-components';
import Quotes from '../components/Quotes/Quotes';
import chopperImg from '../images/chopper.png';

export default function App() {
  return (
    <Content>
      <Quotes quote='quote' author='random author' />
      <ChopperImg src={chopperImg} alt='Chopper!!' />
    </Content>
  )
}

const Content = styled.div`
  height: 100vh;
  margin: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChopperImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`