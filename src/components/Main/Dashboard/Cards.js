import React from 'react';
import SingleCard from './SingleCard';
import styled from 'styled-components';


const Container = styled.div`
    display: flex
`

const Cards = () => {
  return (
    <Container className='container-fluid'>
      <div className='row w-100 mt-5 justify-content-between ml-0'>
        <SingleCard img={require('../../../assets/images/card-icon-1.png').default} heading={'Scoreboard for Streaming Software'}/>
        <SingleCard img={require('../../../assets/images/card-icon-2.png').default} heading={'Scoreboard Remote'}/>
        <SingleCard img={require('../../../assets/images/card-icon-3.png').default} heading={'Instructions'}/>
      </div>
    </Container>
  );
};

export default Cards;
