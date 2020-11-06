import React from 'react'
import Truncate from 'react-truncate'

import './MovieCard.css'

export default function MovieCard({
    title,
    genres,
    img,
    children
}) {

    const renderGenres = () => {
        return genres.slice(0, 5).map((el, idx) => 
            <span key={idx}>
                {el}
            </span>
        )
    };

    return (
        <div className='movie_card-wrapper'>
            <img src={img} />
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div className='genres'>
                <span>
                    {renderGenres()}            
                </span>
            </div>
            <div className='summary'>
                <Truncate lines={3} ellipsis={<span>...</span>}>
                    {children}
                </Truncate>
            </div>
        </div>
    )
}