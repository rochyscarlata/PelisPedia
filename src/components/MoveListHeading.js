import React from 'react'

const MovieListHeading = (props) =>{
    return(
        <div className="col">
            <h1>{props.heading} <i class="fas fa-film" size="7px"></i></h1>
        </div>
    )
}
export default MovieListHeading