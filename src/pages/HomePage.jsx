import React, { Component } from "react";
import FeaturedMovie from "../components/FeaturedMovie.jsx";
import Premieres from "../components/Premieres.jsx";
import axios from "axios";

import TitleSection from "../components/TitleSection"
 
export default class HomePage extends Component {
  state = {
    movies: [],
    moviesUpcoming: [],
    movieFeatured: ""
  };

  componentDidMount() {
    this.getMovies();
    this.getMoviesUpcoming();
  }

  getMoviesUpcoming = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=b4e457bf9b0f18a15b41265ee5df6eff&language=es"
      );
      this.getMovieRandom(data.results);

      this.setState({
        moviesUpcoming: data.results
      });
    } catch (err) {
      console.log(err);
    }
  };

  getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=b4e457bf9b0f18a15b41265ee5df6eff&language=es"
      );
      this.getMovieRandom(data.results);

      this.setState({
        movies: data.results
      });
    } catch (err) {
      console.log(err);
    }
  };
  getMovieRandom(movie) {
    const movieFeatured = movie[Math.floor(Math.random() * movie.length)];

    this.setState({ movieFeatured });
  }

   
  render() {
    const { movies, movieFeatured, moviesUpcoming } = this.state;
    return (
      <div>
        <FeaturedMovie movie={movieFeatured} />
        <TitleSection>
            Premieres   
        </TitleSection>
        <Premieres movies={movies} />
        <TitleSection>
            Soon
        </TitleSection>
        <Premieres movies={moviesUpcoming}/>
      </div>
    );
  }
}
