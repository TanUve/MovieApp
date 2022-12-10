import React from 'react';
import axios from 'axios';
// import hooks
import { useEffect, useState } from 'react';
//import components
import ReturnButton from '../buttons/ReturnButton';
import Buscador from '../search-box/buscador';
import Rating from '@mui/material/Rating';
//Import css
import '../../styles/movieByGenrePage.css';
import '../../styles/movieByGenrePage.css';
import '../../styles/buscador.css'




function MovieByGenrePage(props) {

    const urlMovies = `https://api.themoviedb.org/3/discover/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-EN&with_genres=10749&primary_release_year=2022&page=:pages`;
    const urlImg = `https://image.tmdb.org/t/p/original`;
    const urlGenreId = `https://api.themoviedb.org/3/genre/movie/list?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=en-EN`
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [pages, setPages] = useState(0);
    const maxMovie = movies.length / 10


    //Obtenemos todas las películas
    useEffect(() => {

        const getMoviesData = async () => {
            const respMovies = await axios.get(urlMovies);
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

    //Obtenemos las páginas
    /* useEffect((page) => {
 
     }, page);
 */



    return (
        <>
            <header className="header">Movies</header>
            <div className='movieListHeader'>
                <h1 className='genre'>|Acción{props.genderName} <img src='https://cdn-icons-png.flaticon.com/512/8893/8893034.png' width="19px" /></h1>
                <ReturnButton />
            </div>
            <div className='search-box'><Buscador />
            </div>


            <div className='container'>

                {movies.slice(pages * 12, (pages + 1) * 12).map((movie) =>
                    <div className='movies' key={movie.id}>
                        <img className="poster" src={urlImg + movie.poster_path} width="220px" />
                        <p className='title'>{movie.title}</p>
                        <p className='rating'>{movie.vote_average / 2} / 5</p>
                        <Rating className="ratingComp" name="half-rating-read" value={movie.vote_average / 2} precision={0.1} max={5} readOnly />
                    </div>
                )}

            </div>
            <div id='btns'>
                <button id="prev" onClick={() => {
                    if (pages > 0) {
                        setPages(pages - 1)
                    }
                }}> <img src='https://cdn-icons-png.flaticon.com/512/8893/8893000.png' width="16px" /></button>
                <p id='page' onChange={() => { }} >{pages + 1}</p>
                <button id='next' onClick={() => {
                    if (pages < (maxMovie) - 1) { setPages(pages + 1) }
                }}><img src='https://cdn-icons-png.flaticon.com/512/8893/8893034.png' width="16px" /></button>
            </div >
        </>
    )
}


export default MovieByGenrePage;


/*API_KEY='90c2c57ed9eabcec0ae2b8ebe7b81547';
if(genres.id== pages.results.genre_ids){
pintar las películas que sean de ese género}*/