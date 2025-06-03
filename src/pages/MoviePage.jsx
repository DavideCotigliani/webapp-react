import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import ReviewCard from '../components/ReviewCard'
import axios from 'axios'

const MoviePage = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});


    const fetchMovie = () => {
        axios.get(`http://127.0.0.1:3000/api/movies/${id}`).then((resp) => {
            setMovie(resp.data);
        })
    }
    //metodo per numero di stelle in base al voto
    // const renderStars = (vote) => {
    //     return [1, 2, 3, 4, 5].map((elem, i) => {
    //         return `<i key="star-${i}" className= "fa-solid> </i>`
    //     })
    // }

    useEffect(() => {
        fetchMovie();
    }, [])

    return (
        <>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-4 d-flex img-fluid" >
                    <img src={movie.image} className='img-fluid' alt="Movie" />
                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="card">
                            <h1>{movie.title}</h1>
                            <h3>{movie.director}</h3>
                            <p>{movie.genre}</p>
                            <p>{movie.abstract}</p>
                            <Link className='btn btn-primary' to={`/`}>Torna alla Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h3><i>Le recensioni della nostra community</i></h3>
                    </div>
                </div>
                {movie.reviews && movie.reviews.map((review) => (
                    <ReviewCard review={review} key={`review-${review.id}`} />
                ))}
            </div>
        </>
    )
}

export default MoviePage
