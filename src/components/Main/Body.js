import React from 'react';
import styled from 'styled-components';
import Cards from './Dashboard/Cards';
import WelcomeCard from './Dashboard/WelcomeCard';
import QuickSetupCard from './Dashboard/QuickSetupCard';
import CompanyAbout from './Dashboard/CompanyAbout';

const Body = () => {

  const H4 = styled.h4`
    color:  ${({ theme }) => theme.activeMenu}
`

  return (
      <div>
        <WelcomeCard/>
        <Cards/>
        <H4 className='my-3 mt-5'>
          Quick Setup Guide
        </H4>
        <QuickSetupCard/>
        <CompanyAbout/>
       </div>

  );
};

export default Body;
