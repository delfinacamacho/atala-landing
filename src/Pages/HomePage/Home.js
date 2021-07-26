import React from 'react';
import { Hero } from '../../Components';
import {Card, CardContainer} from '../../Components/Card/Card';

const Home = () => {
  return (
    <>
      <Hero/>
<CardContainer>
      <Card className='pink' caption='Credentials' description='It is a long established fact that a reader will be distracted by the readable content of a page.'/>
      <Card className='blue' caption='Wallet' description='It is a long established fact that a reader will be distracted by the readable content of a page.'/>
      <Card className='green' caption='Crypto' description='It is a long established fact that a reader will be distracted by the readable content of a page.'/>
</CardContainer>
    </>
  )
}

export default Home;
