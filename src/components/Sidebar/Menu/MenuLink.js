import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    width: 100%;
    padding: 0.5rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;
    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`


const Span = styled.span`
    /* color: ${props => props.active ? props.theme.activeMenu : "#AAA5A5"}; */
    color: ${props => !props.active && props.theme.textColor};
    font-size: 1rem;
    margin-right: 1rem;
`

const Title = styled.h1`
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0px;
    font-weight: bold;
    color: ${props => props.active ? props.theme.activeMenu : "#343434"};
`

const MenuLink = ({ title, active, icon, isLogoutBtn }) => {

  return (
    <Container active={active} style={{ paddingLeft : isLogoutBtn? '2.5rem': ''}}>
      <Span>{icon}</Span>
      <Title active={active}>{title}</Title>
    </Container>
  )
}

export default MenuLink
