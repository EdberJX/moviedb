import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import components
import HomePage from '../pages/HomePage';
import MovieDetail from '../pages/MovieDetail';
import {createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

 const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Rock+Salt|Turret+Road|Cinzel&display=swap');
  body {
    margin:0;
  
  }
  
`

function App() {
  return (
    <Router>
      <div>
        <Header/>
         <Route exact path="/" component={HomePage}></Route>
         <Route path="/detail/:id" component={MovieDetail}></Route>
        <Footer/>
     
        <GlobalStyle/>
        
      </div>
    </Router>
    
  );
}

export default App;
