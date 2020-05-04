import React from 'react';

const Movie=(props)=>{
    return(
        <div>
            <h1>The lord of the Rings: {props.title}</h1>
                <p>{props.hours}h {props.minutes}mins</p>
            <p>{props.titles}</p>
        </div>
    )
}

export default Movie