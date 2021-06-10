import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const MoveList = (props) => {
    return (
        <>
        {props.movies.map((movie,i)=>
            <div className="d-flex justify-content-start m-3">
                
                <img src={movie.Poster} alt="movie"></img>
            </div>
        )}
        </>
    )
}
export default MoveList