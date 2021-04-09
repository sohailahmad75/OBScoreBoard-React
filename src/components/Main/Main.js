import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Body from './Body';



const Container = styled.div`
    width: auto;
    position: relative;
    padding: 2rem 1rem 2rem 4rem;
    margin-left: 14rem;
    @media only screen and (max-width: 1200px) {
        margin-left: 0;
        padding:  0rem 1rem;
    } 
`


const Main = () => {
  return (
    <Container>
      <Nav />
      <Body/>
    </Container>
  )
}

export default Main
