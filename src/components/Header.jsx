import React from 'react';
import Styled from 'styled-components';

const Header = Styled.div`
    position: fixed;
    width: 100%;
    height: 75px;
    background: rgba(0,0,0,0.5);
    >h3{
        margin-left: 15px;
        color: white;
    }
    `
export default ()=>(
    <Header>
        <h3>
            hola
        </h3>
    </Header>
)