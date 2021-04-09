

import React from 'react';
import styled from 'styled-components';
import Image from '../../../assets/images/logo.png'

const Container = styled.div`
    display: flex
`

const CompanyAbout = () => {
  return (
    <Container className='container-fluid  mt-4'>
      <div className='w-100 company-about'>
        <div className="logo">
          <div style={{maxWidth: '200px'}}>
            <img width={'100%'} height={'auto'} src={Image} alt="logo"/>
          </div>

        </div>
        <div className="des">
          <b>OBScoreboard</b> is a professional grade scoreboard for broadcasting software’s such as OBS and Wirecast. Includes
          sports such as Soccer, Rugby, Gaelic Football and Hurling.
        </div>
      </div>
    </Container>
  );
};

export default CompanyAbout;

