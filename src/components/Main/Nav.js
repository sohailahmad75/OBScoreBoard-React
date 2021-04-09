import React from 'react'
import styled from 'styled-components'
import SearchIcon from '../svgs/SearchIcon';
import AppNotificationIcon from '../svgs/AppNotificationIcon';

const Container = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    margin-bottom: 3rem;
    @media only screen and (max-width: 1200px) {
       margin-bottom: 1rem;
    } 
`
const UserName = styled.span`
    border-left: 2px solid ${({ theme }) => theme.grayBorder};
    padding-left: 2rem
`

const ProfileImg = styled.img`
    height: 3rem;
    margin: 0 1rem;
    cursor: pointer;
    padding: 1px;
    border: 2px solid ${({ theme }) => theme.activeMenu};
    border-radius: 50%
`

const Nav = () => {
  return (
    <Container>
      <h4>Dashboard</h4>
      <span style={{marginLeft: 'auto'}} className='d-none d-xl-inline-block'>
      <span className='mx-3'><SearchIcon fill={'#C5C7CD'}/></span>
      <span className='mx-3'><AppNotificationIcon fill={'#C5C7CD'} isOn={true}/></span>
      <UserName className='mx-3 d-none d-lg-inline-block'>Manoga Nimanja</UserName>
      <span className='d-none d-lg-inline-block'><ProfileImg src={require('../../../src/assets/images/userphoto.png').default} /></span>
      </span>

    </Container>
  )
}

export default Nav
