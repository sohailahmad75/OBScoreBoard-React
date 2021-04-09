import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/logo.png'

const Container = styled.div`
    // margin-top: 1rem;
    max-width: 200px;
    width: 100%;
`

const ProfileImg = styled.img`
    height: 5rem;
    margin-left: 0.5rem;
    width: 100%;
    height:100%;
`


const Profile = () => {
  return (
    <Container>
      <ProfileImg src={Image} />
    </Container>
  )
}

export default Profile
