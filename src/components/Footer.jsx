import React from 'react';
import Styled from 'styled-components';
import Logo from '../img/logomdb.png'

const Footer = Styled.div`
  
    padding:20px;
    background: rgba(38,50,56,1);
    
    `
export default ()=>(
    <Footer>
        <img src={Logo} alt="logo moviedb" witdh="200" height="75"/>
        
    </Footer>
)