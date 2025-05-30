import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-image-top">
                    <img src={movie.image} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="card-body">
                <h3 className='text-primary'> {movie.title}</h3>
                <h4>{movie.director}</h4>
                <p>{movie.plot}</p>
                <Link className='btn btn-primary' to={`/movies/1`}>Leggi tutto</Link>
            </div>
        </div>
    )
}

export default MovieCard
