import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';

const BackgroundImg = require('../../../assets/images/dashboard_banner_bg.png').default

const Container = styled.div`
    width: auto;
    position: relative;
    padding: 1rem 2rem ;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.activeMenu};
    color: white;
`

const QuickSetupCard = () => {
  return (
    <Container>
     <div className='mb-2'>01. Open your broadcasting Software’s web browser and add obscorboard.com as your source.
Instructions for OBS, Wirecast can be Found above.</div>
      <div className='mb-2'>02. Follow the instructions to set up scoreboard.</div>
      <div className='mb-2'>03. Open <a href='#' style={{fontWeight: 'bold', color : 'white'}}>obscorboard.com</a>  on your Phone and sign in.</div>
      <div className='mb-2'>04. Click the Scoreboard Remote button. </div>
      <div className='mb-2'>05. Type in the generated code in text box. If the code If the code is corrent, the text box will disappear.</div>
      <div className='mb-2'>06. You should now be able to control the scoreboard from your phone.</div>
    </Container>
  );
};

export default QuickSetupCard;
