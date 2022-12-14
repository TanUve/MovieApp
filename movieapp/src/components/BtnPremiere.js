import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function BtnProximamente() {

    const [showPremiere, setShowPremiere] = useState(true);
    const [premiereData, setPremiereData] = useState([]);

    useEffect(() => {
        const getPremiereData = async () => {
            const respPremiere = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES&&primary_release_year=2022&page=1&region=ES')
            setPremiereData(respPremiere.data.results)
        }
        getPremiereData();
    }, []);
    console.log(premiereData)

    function GoNewPage() {
        setShowPremiere(!showPremiere)
    }

    return (
        <>
            <div id="separar">
                <Link to="upcoming/">
                    <button className='buttons'>Proximamente</button>
                </Link>
            </div>

            <div id="separar">
                <Link to="topRated">
                    <button className='buttons'>Mejor valoradas</button>
                </Link>
            </div>


            <div id="separar">
                <Link to="now_playing/">
                    <button className='buttons'>Cartelera</button>
                </Link>
            </div>

        </>

    );
}

export default BtnProximamente


