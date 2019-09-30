import React from 'react';
import Styled from 'styled-components';

const urlBaseImg = 'https://image.tmdb.org/t/p/w185';
const Container =  Styled.div`
    border: 2px solid gold;
    margin: 2px;
`
const Img = Styled.img`
`
const Name = Styled.span`
    background: rgba(0,0,0,0.5);
    color: white;
`
export default ({actor})=>{
    return (
        <Container>
            <Img src={actor.profile_path ? urlBaseImg + actor.profile_path : "https://dummyimage.com/185&text=no_image"} ></Img>
            <Name>{actor.name}  </Name>
        </Container>
    )
    
}