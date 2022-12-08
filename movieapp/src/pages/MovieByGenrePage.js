import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import './movieByGenderPage.css';



function MovieByGenrePage() {

    const urlGenre = `https://api.themoviedb.org/3/discover/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-EN&with_genres={idgenre}&primary_release_year=2022`
    const urlImg = `https://image.tmdb.org/t/p/original`;
    const urlGenreId = `https://api.themoviedb.org/3/genre/movie/list?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=en-EN`
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [page, setPage] = useState(0);
    const maxMovie = movies.length / 10


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
                <h1 className='genre'>|Science Fiction <img src='https://cdn-icons-png.flaticon.com/512/8893/8893034.png' width="19spx" /></h1>
                <button className='returnButton'><img src='https://cdn-icons-png.flaticon.com/512/8893/8893000.png' width="16px" />   Volver</button>
            </header>
            <div className='container'>

                {movies.slice(page * 12, (page + 1) * 12).map((movie) =>
                    <div className='movies'>
                        <img class="poster" src={urlImg + movie.poster_path} width="220px" />
                        <p className='title'>{movie.title}</p>
                        <p className='rating'>{movie.vote_average / 2} / 5</p>
                        <Rating className="ratingComp" name="half-rating-read" value={movie.vote_average / 2} precision={0.05} max={5} readOnly />
                    </div>
                )}

            </div>
            <div id='btns'>
                <button id="prev" onClick={() => {
                    if (page > 0) {
                        setPage(page - 1)
                    }
                }}> Anterior</button>
                <p id='page'>{page+1}</p>
                <button id='next' onClick={() => {
                    if (page < (maxMovie) - 1) { setPage(page + 1) }
                }}>Siguiente</button>
            </div >

        </>
    )
}


export default MovieByGenrePage;


/*API_KEY='90c2c57ed9eabcec0ae2b8ebe7b81547';
if(genres.id== pages.results.genre_ids){
pintar las películas que sean de ese género}*/