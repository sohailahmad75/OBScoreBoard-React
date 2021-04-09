import React from 'react';
import styled from 'styled-components';



const CardContainer = styled.div`
    color: ${({theme})=> theme.activeMenu};
    border: 1px solid ${({ theme }) => theme.grayBorder};
    border-radius: 5px;
    padding: 20px 15px;
    width: 30%;
    box-shadow: 4px 4px 16px 6px #e5e5e5;
`
const IconImage = styled.div`
    background-color: ${({theme})=> theme.activeMenu};
    width: 75px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 10px
     @media only screen and (max-width: 1200px) {
        width: 60px;
    height: 57px;
    } 
        
`



const SingleCard = ({img, heading}) => {
  return (
      <CardContainer className='d-flex align-items-center flex-column flex-lg-row text-center'>
          <IconImage>
            <img style={{maxWidth: '40px'}} src={img} width={100} height={'auto'} alt={heading}/>
          </IconImage>
          <h5 className='ml-0 ml-lg-4 mt-3 mt-lg-0'>{heading}</h5>

      </CardContainer>
  );
};

export default SingleCard;
