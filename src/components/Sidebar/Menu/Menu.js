import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'
import DeshboardIcon from '../../svgs/DeshboardIcon';
import PricingIcon from '../../svgs/PricingIcon';
import DemoIcon from '../../svgs/DemoIcon';
import ContactIcon from '../../svgs/ContactIcon';
import NotificationsIcon from '../../svgs/NotificationsIcon';
import SettingsIcon from '../../svgs/SettingsIcon';
import LogoutIcon from '../../svgs/LogoutIcon';


const Container = styled.div`
    margin-top: 1rem;
    width: 100%;
    overflow: auto
`
const H3 = styled.h3`
    font-size: 18px;
    font-weight: bold
`

const Menu = () => {
  return (
    <Container>
      <MenuLink title="Deshboard" icon={<DeshboardIcon/>}/>
      <MenuLink title="Pricing" icon={<PricingIcon/>}  />
      <MenuLink title="Demo" icon={<DemoIcon/>}/>
      <MenuLink title="Contact" icon={<ContactIcon fill={'#007AFF'}/>} active/>
      <MenuLink title="Notifications" icon={<NotificationsIcon/>} />
      <MenuLink title="Settings" icon={<SettingsIcon/>} />
      <H3 className='ml-4 mt-5 mb-4'>Engage</H3>
      <MenuLink title="FAQ" icon={<DemoIcon/>}/>
      <MenuLink title="Instructions" icon={<ContactIcon/>}  />
      <MenuLink title="Privacy Policy" icon={<NotificationsIcon/>}/>
      <MenuLink title="Terms of Service" icon={<SettingsIcon />}/>
      <div className='mt-5'>
        <MenuLink title="Logout" isLogoutBtn={true} icon={<LogoutIcon />}/>
      </div>

    </Container>
  )
}

export default Menu
