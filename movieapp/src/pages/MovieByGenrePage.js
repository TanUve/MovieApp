import React from 'react';
import MovieByGenre from './MovieByGenre.js';
import { useEffect, useState } from 'react';
import axios from 'axios';


function MovieByGenrePage() {

    const urlGenre = `https://api.themoviedb.org/3/discover/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=es-ES&with_genres={genres}&primary_release_year=2022`
    const urlImg=`https://image.tmdb.org/t/p/original`;
    const [movies, setMovies] = useState([]);

    //Obtenemos todas las películas
    useEffect(() => {

        const getMoviesData = async () => {
            const respMovies = await axios.get(urlGenre);
            setMovies(respMovies.data.results);
            console.log(respMovies.data.results);
        }
        getMoviesData();
    }, []);

    return (
        <>
            <header>
                <h1>MovieApp</h1>
                <button>Volver</button>
            </header>
            {movies.map((movie) =>
                <div>
                    <img src={urlImg+movie.poster_path} width="150px"/>
                    <p>{movie.title}</p>
                </div>
            )}
            

        </>
    )
}


export default MovieByGenrePage;


/*API_KEY='90c2c57ed9eabcec0ae2b8ebe7b81547';
if(genres.id== pages.results.genre_ids){
pintar las películas que sean de ese género}*/