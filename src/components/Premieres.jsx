import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';


const urlBaseImg = 'https://image.tmdb.org/t/p/w185'
const Container = Styled.div`
   
    >ul{
        margin:0;
        background: rgba(66,165,245,1);
        padding-left: 0;
        overflow: auto;
        display: flex;
        align-items:strech;
    }
`
const ItemMovie = Styled(Link)`
    list-style: none;
    display: inline-block;
    background: url(${props=>urlBaseImg+props.movie.poster_path}) no-repeat;
    background-size: cover;
    min-width: 200px;
    margin:5px;
    height: 300px;
    font-family: 'Amatic SC', cursive;
    color: yellow;
   
    >span{
        background: rgba(0,0,0,0.5);
        display:none;
    }
    &:hover{
        >span{
            display: inline;
        }
    }
`

export default ({movies})=>(
    
    <Container>
        <ul>
        {
            movies.map(movie=>(
                <ItemMovie key={movie.id} to={`/detail/${movie.id}`} movie={movie}>
                    <span>{movie.title}</span>
                </ItemMovie>
                
            ))
        }
    </ul>
    </Container>
)