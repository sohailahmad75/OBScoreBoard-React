import React, {useState} from 'react';
import styled from 'styled-components'
import Profile from './Profile';
import Menu from './Menu/Menu';
import MenuIcon from '../svgs/MenuIcon';
import Image from '../../assets/images/logo.png';
import CloseIcon from '../svgs/CloseIcon';
import SearchIcon from '../svgs/SearchIcon';
import AppNotificationIcon from '../svgs/AppNotificationIcon';
const Container = styled.div`
    border: 1px solid ${({ theme }) => theme.grayBorder};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 1200px) {
        left: ${props => props.menuOpened ? '0' : '-300px'};
        background: ${({ theme }) => theme.primary};
        z-index: 99;
  transition: all 0.5s ease 0s;
    } 
`
  const ProfileImg = styled.img`
    height: 3rem;
    margin: 0 1rem;
    cursor: pointer;
    padding: 1px;
    border: 2px solid ${({ theme }) => theme.activeMenu};
    border-radius: 50%;
    @media only screen and (max-width: 1200px) {
        height: 2rem;
    } 
`
  const OpenMenuIcon = styled.span`
    display: none;
    @media only screen and (max-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 0;
        padding: 1rem};
    } 
`
const UserName = styled.span`
    border-left: 2px solid ${({ theme }) => theme.grayBorder};
    padding-left: 2rem
`



const Sidebar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  
  const openMenu = () => {
    setMenuOpened(!menuOpened);
  }
  return (
    <>
      <OpenMenuIcon onClick={openMenu}><MenuIcon/>
        <img src={Image} alt="logo" style={{maxWidth: '125px'}}/>
        <span  className='d-inline-block d-xl-none'>
        <span className='d-none d-inline-block d-xl-none'><ProfileImg src={require('../../../src/assets/images/userphoto.png').default} /></span>
      <span className='mx-2'><SearchIcon fill={'#C5C7CD'}/></span>
      <span className='mx-2'><AppNotificationIcon fill={'#C5C7CD'} isOn={true}/></span>
     
      </span>
      </OpenMenuIcon>
      <Container menuOpened={menuOpened}>
        <div className='d-flex justify-content-between align-items-center w-100 pt-2'>
          <Profile/>
          <span className='pb-1 mr-3 d-flex d-lg-none' style={{opacity : '.9'}} onClick={openMenu}  ><CloseIcon fill={'#4a4a4a'} size={17}/></span>
        </div>
        <Menu/>
      </Container>
    </>

  );
};

export default Sidebar;
