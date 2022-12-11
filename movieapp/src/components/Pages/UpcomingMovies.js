import React from 'react';
import axios from 'axios';
// import hooks
import { useEffect, useState } from 'react';
//import components
import ReturnButton from '../buttons/ReturnButton';
import Buscador from '../search-box/buscador';
import Rating from '@mui/material/Rating';
//Import css
import '../../styles/upcomingMovies.css';

//const API_KEY = '90c2c57ed9eabcec0ae2b8ebe7b81547';



function UpcomingMovies (props) {

    const urlUpcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES&&primary_release_year=2022&page=1&region=ES`;
    const urlImg = `https://image.tmdb.org/t/p/original`;
    const urlGenreId = `https://api.themoviedb.org/3/genre/movie/list?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES`

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [pages, setPages] = useState(0);

    //const navigate = useNavigate();

    const maxMovie = movies.length / 10


    //Obtenemos todas las películas
    useEffect(() => {
        const getMoviesData = async () => {
            const respMovies = await axios.get(urlUpcomingMovies);
            setMovies(respMovies.data.results);
            console.log(respMovies.data.results);
        }
        getMoviesData();
    }, [])


    //Obtenemos los géneros
    useEffect(() => {
        const getGenreId = async () => {
            const respGenres = await axios.get(urlGenreId);
            setGenres(respGenres.data);
            console.log(respGenres.data.genres);
        }
        getGenreId();
    }, [])

    //Código nuevo, cuidado



    return (
        <>
            <header className="header">Movies</header>
            <div className='upcomingHeader'>
                <h1 className='upcoming'>| Próximos estrenos <img src='https://cdn-icons-png.flaticon.com/512/8893/8893034.png' width="19px" /></h1>
                <ReturnButton />
            </div>
            <div className='search-box'>
                <Buscador />
            </div>


            <div className='container'>

                {movies.slice(pages * 12, (pages + 1) * 12).map((movie) =>
                    <div className='movies'>
                        <img className="poster" src={urlImg + movie.poster_path} width="220px" />
                        <p className='title'>{movie.title}</p>
                        <p className='rating'>{movie.vote_average / 2} / 5</p>
                        <Rating className="ratingComp" name="half-rating-read" value={movie.vote_average / 2} precision={0.1} max={5} readOnly />
                        <div key={movie.id} />
                    </div>
                )}

            </div>
            <div id='btns'>
                <button id="prev" onClick={() => {
                    if (pages > 0) {
                        setPages(pages - 1)
                    }
                }}>
                    <img src='https://cdn-icons-png.flaticon.com/512/8893/8893000.png' width="16px" /></button>
                <p id='page' onChange={() => { }} >
                    {pages + 1}
                </p>
                <button id='next' onClick={() => {
                    if (pages < (maxMovie) - 1) { setPages(pages + 1) }
                }}>
                    <img src='https://cdn-icons-png.flaticon.com/512/8893/8893034.png' width="16px" /></button>
            </div >
        </>
    )
}


export default UpcomingMovies;
