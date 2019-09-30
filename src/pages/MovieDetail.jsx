import React, { Component } from 'react';
import axios from 'axios';
import FeaturedMovie from '../components/FeaturedMovie';
import Cast from '../components/Cast';

export default class HomePage extends Component{

    state = {
        movie: "",
        cast: ""
    }
    componentDidMount () {
        const { id } = this.props.match.params;
        this.getMovie(id);
        this.getCast(id);
    }
    getMovie = async (id) => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b4e457bf9b0f18a15b41265ee5df6eff&language=es`);
            this.setState({
                movie: data
            })
        } catch (error) {
            console.log(error)
        }
        
    }
    getCast = async (id) => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b4e457bf9b0f18a15b41265ee5df6eff&language=es`);
            this.setState({
                cast: data.cast
            })
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        const { movie, cast } = this.state;
        return(
            <React.Fragment>
                <FeaturedMovie movie={movie}/>
                <Cast cast={cast}/>

            </React.Fragment>
            
        )
    }
}
