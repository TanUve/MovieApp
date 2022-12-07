import {useEffect, useState} from 'react';
import axios from 'axios';

function Carousel (){

    const [genreData, setGenreData] = useState ([]);

    useEffect(() => {
        const getGenreData = async () => {
        const respGenreData = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=en-US');
        setGenreData(respGenreData.data.genres);
        }
        getGenreData();
        }, [])

return (
    <>
    <div className="button">
        {genreData.map((item) => {
            return (
            <button>{item.name}</button> 
            )
        })
       }
       </div>
    </>
);

}

export default Carousel;
    