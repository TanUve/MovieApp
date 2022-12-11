import {useEffect, useState} from 'react';
import axios from 'axios';
import './Carousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

function Carousel(movie) {

  const [genreData, setGenreData] = useState ([]);
  const [moviesData, setMoviesData] = useState([]);
  const [premiereData, setPremiereData] = useState ([]);



  useEffect(() => {
      const getGenreData = async () => {
      const respGenreData = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=en-EN`);
      setGenreData(respGenreData.data.genres);
      }
      getGenreData();
      }, [])
      /*console.log(genreData)*/

  useEffect(() => {
      const getMoviesData = async () => {
      const respMovies = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-EN&with_genres={idgenre}&primary_release_year=2022`+ movie.poster_path);
      setMoviesData(respMovies.data.results);
      }
      getMoviesData();
      }, []);
      /*console.log(moviesData);*/

  useEffect (() => {
    const getPremiereData = async () => {
    const respPremiere = await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=en-US`)
    setPremiereData(respPremiere.data)
    }
    getPremiereData();
    }, []);
    console.log(premiereData)
    
  


      /*función para las flechas*/
    /*function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
          />
        );
      }*/
      
    /*Para el carrusel de las imágenes*/
      const settingsMovie = {
      speed: 300,
      centerPadding: "40px",
      arrows: true,
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            dots: true,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      /*prevArrow: <SamplePrevArrow/>*/
      };

    /*Para el carrusel de las géneros*/
      const settingsGenres = {
        speed: 300,
        centerPadding: "40px",
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        /*prevArrow: <SamplePrevArrow/>*/
        };


    return (
      <div className='carousel_container'>
      {/*renderizamos el listado de géneros*/}
        <div>
        <Slider {...settingsGenres}>
          {genreData.map((movie) => {
             
            return (
              <button>{movie.name}</button>
            )
          })
          }
        </Slider>
        </div>
        <Slider {...settingsMovie}>
          {moviesData.map((movie) =>
          <div className='moviesImages'>
          <img 
            src={"https://image.tmdb.org/t/p/original" + movie.poster_path}  width= "100%"/>
          </div>
          )}
        </Slider>     
        <div id="separar">
        <button className='buttons'>Estrenos</button>
        </div>
        <div id="separar">
        <button className='buttons'>Mejor valoradas</button>
        </div>
        <div id="separar">
        <button className='buttons'>Proximamente</button>
        </div>
        </div>
    );
  }

export default Carousel


