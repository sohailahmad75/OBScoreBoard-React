import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';

const BackgroundImg = require('../../../assets/images/dashboard_banner_bg.png').default

const Container = styled.div`
    width: auto;
    position: relative;
    padding: 2rem 1rem 4rem 2.5rem;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.activeMenu};
    background-image: url(${require('../../../assets/images/dashboard_banner_bg.png').default});
    background-repeat: no-repeat;
    background-position: bottom right; 
    color: white;
    @media only screen and (max-width: 1200px) {
        padding: 1rem 0.5rem 2rem 1.5rem;
    } 
`
const Img = styled.img`
    position: absolute;
    right: 0;
    top: -3rem;
    max-width: 310px;
    @media only screen and (max-width: 1200px) {
        max-width: 200px;
        bottom: -2rem;
        top: auto
    } 
    `


const WelcomeCard = () => {
  return (
    <Container>
      <div>
        <h3 className='font-weight-bold'>Mr Manoga!</h3>
        <h5 className='font-weight-light'>Welcome Back Conor</h5>
        <div className='welcome-card-des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet lectus porttitor amet adipiscing proin purus sed sed. Egestas lectus malesuada amet eu. Scelerisque nisi, cras sed nulla nunc. Facilisi imperdiet et praesent purus dis.</div>
      </div>
      <Img src={require('../../../assets/images/footballer_img.png').default} alt="footballer_img"/>
    </Container>
  );
};

export default WelcomeCard;
