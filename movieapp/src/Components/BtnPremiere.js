import {useEffect, useState} from 'react';
import axios from 'axios';


function BtnProximamente() {

    const [showPremiere, setShowPremiere] = useState (true);
    const [premiereData, setPremiereData] = useState ([]);

  useEffect (() => {
    const getPremiereData = async () => {
    const respPremiere = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES&&primary_release_year=2022&page=1&region=ES')
    setPremiereData(respPremiere.data.results)
    }
    getPremiereData();
    }, []);
    console.log(premiereData)

    function GoNewPage(){
        setShowPremiere(!showPremiere)
      }
    
    return (
    <div>
        <div id="separar">
            <button OnClick={GoNewPage} className='buttons'>Estrenos</button>
            {showPremiere===true
            ?
            (premiereData.map((movie) =>{
                return (
                    <p>{movie.title}</p>
                )
            }))
            :
            <div className='moviesPremiere'>
            <p>No existe pelicula de esa categoría</p>
            </div>
            }
            <div>
            </div>
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

export default BtnProximamente


