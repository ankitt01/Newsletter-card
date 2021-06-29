import React from 'react';
import styled from 'styled-components';
import { SideImage } from './sideImage';
import { Details } from './details';

const CardContainer = styled.div`
width: 1100px;
height: 500px;
display: flex;
border-radius: 26px;
position: relative;
border: 2px solid white;
background-color: rgba(255,255,255,0.2);
backdrop-filter: blur(10px);
`;
export function NewsLetter(props) {
    return(
        <CardContainer>
            <Details />
            <SideImage />
        </CardContainer>
    ) 
}