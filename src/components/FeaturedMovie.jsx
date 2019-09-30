import React from 'react';
import Styled from 'styled-components';

const urlBaseImg = 'https://image.tmdb.org/t/p/w780'
const Index = Styled.div`
    background: url(${props => urlBaseImg + props.movie.backdrop_path}) no-repeat;
    background-size: cover;
    height: 700px;
    color: white;
    font-size: 22px;
    font-family: 'Turret Road', cursive;
`

const PeliculaInfo = Styled.div`
    position: relative;
    color: rgba(285,220,57,1)
`
const PeliculaInfoContent = Styled.div`
    
    position: absolute;
    top:150px;
    left: 50px;
    background: rgba(38,50,56,0.5);
    padding: 10px;
`
const PeliculaInfoTitle= Styled.h1`
    color: rgba(255,170,0,1);
    
    font-family: 'Rock Salt', cursive;
`
const PeliculaInfoOverview= Styled.p`
    font-size: 14px;
    max-width: 300px;
`
const AverageVote= Styled.span` 
    color: rgba(100,221,23,1);
    font-family: 'Cinzel', serif;
`
const Cargando = Styled.div`
`
export default ({movie})=>{
    if(movie){
        return(
            <Index movie={movie}>
        <PeliculaInfo>
            <PeliculaInfoContent>
                <PeliculaInfoTitle>
                    {movie.title}
                </PeliculaInfoTitle>
                <PeliculaInfoOverview>
                    {movie.overview}
                </PeliculaInfoOverview>
                <AverageVote>{movie.vote_average}/10</AverageVote>
                    
                
            </PeliculaInfoContent>
        </PeliculaInfo>
    </Index>
        )
        
    }else{
        return <Cargando>Cargando...</Cargando>
    }
    
}