import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
justify-content: center;
`;

const InnerContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 80%;
`;

const Header = styled.h1`
margin: 0;
color: #262fec;
font-weight: 700;
font-size: 45px;
`;

const SubHeader = styled.h3`
margin: 10px 0;
color: #000;
font-weight: 700;
font-size: 24px;
`;

const Text = styled.p`
color: #000;
font-weight: 500;
font-size: 20px;
`;

export function Details(props) {
    return(
        <DetailsContainer>
            <InnerContainer>
                <Header>Hey, wait...</Header>
                <SubHeader>Subscribe to our newsletter!</SubHeader>
                <Text>You will never miss our podcasts, latest news,etc. Our newsletter is once a weel, every wednesday.</Text>
            </InnerContainer>
        </DetailsContainer>
    ) 
}
