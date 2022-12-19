import React from 'react';
import CarouselGenres from '../Carousel/CarouselGenres'
import CarouselImagenes from '../Carousel/CarouselImagenes'
import Buscador from '../search-box/buscador'
import BtnPremiere from '../buttons/BtnPremiere'
import '../../styles/home.css'
import Header from '../Header';

function Home() {

    return (
        <div className='home'>
            <Header />
            <div className='searchHome'>
                <Buscador />
            </div>

            <div className='genresCarousel'>
                <CarouselGenres />
            </div>
            <div className='posterCarousel'>
                <CarouselImagenes />
            </div>
            <div className='btnPrem'>
                <BtnPremiere />

            </div>

            
        </div>


    )
}

export default Home;