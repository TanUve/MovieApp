import React from 'react';
import '../../styles/movieByGenrePage.css';
import { Link } from 'react-router-dom';


function ReturnButton() {


    return (
        <>

            <Link to="/" >
                <button className='returnButton'>
                    <img src='https://cdn-icons-png.flaticon.com/512/8893/8893000.png' width="16px" />   Volver
                </button>
            </Link>

        </>
    )
};


export default ReturnButton;