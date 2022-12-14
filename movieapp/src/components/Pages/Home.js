import React from 'react';
import CarouselGenres from '../CarouselGenres'
import CarouselImagenes from '../CarouselImagenes'
import Buscador from '../search-box/buscador'
import BtnPremiere from '../BtnPremiere'



function Home() {

    return (
        <div>
        <Buscador/>
        <CarouselGenres/>
        <CarouselImagenes/>
        <BtnPremiere/>     
        </div>


    )
}

export default Home;