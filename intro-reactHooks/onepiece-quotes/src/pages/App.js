import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import chopperImg from '../images/chopper.png';
import roomShamblesSound from '../sounds/Room_Shambles.mp3';

import Quotes from '../components/Quotes/Quotes';
import { getQuotes } from '../services/QuotesService/QuotesService';

const audio = new Audio(roomShamblesSound);

export default function App() {
  let isMounted = useRef(true);

  const [quotes, setQuotes] = useState({
     quote: 'Loading quote...', 
     author: 'Loading author...' 
    });

  const onUpdate = async () => {
    const quote = await getQuotes();
    audio.volume = 0.05;
    if(isMounted.current) {
      audio.play();

      setTimeout(() => {
        setQuotes(quote);
      }, 2800);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      onUpdate();
    }, 500);

    return () => {
      isMounted.current = false;
    }
  }, [])

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