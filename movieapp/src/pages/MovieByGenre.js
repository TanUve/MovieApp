import axios from 'axios';
import { useEffect, useState } from 'react';



function MovieByGenre(props) {
    const [genre, setGenre] = useState();

    useEffect(() => {
        const getGenreId = async () => {
            const respGenre = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES`);
            setGenre(respGenre.data);
        }
        getGenreId();
    }, [])

    return (
        <>
            <div>
                <img src="http://" />
                <p>{props.movie}</p>
                <p></p>
            </div>
        </>

    )
}


export default MovieByGenre;
