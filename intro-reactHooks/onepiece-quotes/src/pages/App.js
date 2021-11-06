import React, { useState } from 'react';
import styled from 'styled-components';
import chopperImg from '../images/chopper.png';

import Quotes from '../components/Quotes/Quotes';
import { getQuotes } from '../services/QuotesService/QuotesService';

export default function App() {

  const [quotes, setQuotes] = useState({ quote: 'quote', author: 'random author' });

  const onUpdate = async () => {
    const quote = await getQuotes();
    setQuotes(quote);
  }

  return (
    <Content>
      <Quotes {...quotes} onUpdate={onUpdate} />
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
  max-height: 80vh;
  align-self: flex-end;
`