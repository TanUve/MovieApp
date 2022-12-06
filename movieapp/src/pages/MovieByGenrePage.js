import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './movieByGenderPage.css';


function MovieByGenrePage() {

    const urlGenre = `https://api.themoviedb.org/3/discover/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=es-ES&with_genres=28&primary_release_year=2022`
    const urlImg = `https://image.tmdb.org/t/p/original`;
    const urlGenreId = `https://api.themoviedb.org/3/genre/movie/list?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES`
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState();

    //Obtenemos todas las películas
    useEffect(() => {

        const getMoviesData = async () => {
            const respMovies = await axios.get(urlGenre);
            setMovies(respMovies.data.results);
            console.log(respMovies.data.results);
        }
        getMoviesData();
    }, []);

    //Obtenemos los géneros
    useEffect(() => {
        const getGenreId = async () => {
            const respGenres = await axios.get(urlGenreId);
            setGenres(respGenres.data);
            console.log(respGenres.data.genres);
        }
        getGenreId();
    }, [])

    return (
        <>
            <header className='movieListHeader'>
                <h1 className='genre'>| Género <img src='https://cdn-icons-png.flaticon.com/512/8893/8893034.png' width="35px"/></h1>
                <button className='returnButton'><img src='https://cdn-icons-png.flaticon.com/512/8893/8893000.png' width="16px"/>   Volver</button>
            </header>
            <div className='container'>

                {movies.map((movie, genre) =>
                    <div className='movies'>
                        <img src={urlImg + movie.poster_path} width="280px" />
                        <p className='title'>{movie.title}</p>
                    </div>
                )}


            </div>
        </>
    )
}


export default MovieByGenrePage;


/*API_KEY='90c2c57ed9eabcec0ae2b8ebe7b81547';
if(genres.id== pages.results.genre_ids){
pintar las películas que sean de ese género}*/