import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const initialMovies = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        plot: "Lorem ipsum dolor",
        image: "https://picsum.photos/500/300",
    },
    {
        id: 2,
        title: "Great Gatsby",
        director: "Luhrmann",
        plot: "Lorem ipsum dolor",
        image: "https://picsum.photos/500/300",
    },
    {
        id: 3,
        title: "Matrix",
        director: "Wachowski",
        plot: "Lorem ipsum dolor",
        image: "https://picsum.photos/500/300",
    },
    {
        id: 4,
        title: "Nuovo Cinema Paradiso",
        director: "Giuseppe Tornatore",
        plot: "Lorem ipsum dolor",
        image: "https://picsum.photos/500/300",
    },
    {
        id: 5,
        title: "C'era una volta in America",
        director: "Sergio Leone",
        plot: "Lorem ipsum dolor",
        image: "https://picsum.photos/500/300",
    },
]
const initialReviews = [
    {
        id: "1",
        text: "lorem ipsum dolor",
        author: "Autore recensione 1",
        vote: 4
    },
    {
        id: "2",
        text: "lorem ipsum dolor",
        author: "Autore recensione 2",
        vote: 3
    },
    {
        id: "3",
        text: "lorem ipsum dolor",
        author: "Autore recensione 3",
        vote: 5
    },
]
const MoviePage = () => {
    const { id } = useParams();

    const [movies, setMovies] = useState(initialMovies); // martedì verrà cancellato
    const [reviews, setReviews] = useState(initialReviews) // anche questo

    const [movie, setMovie] = useState({});
    // funzione per recuperare l'id passato come parametro
    const fetchMovie = () => {
        movies.forEach((actualMovie) => {
            if (actualMovie.id === parseInt(id)) {
                setMovie(actualMovie);
            }
        });
    }
    useEffect(() => {
        fetchMovie();
    }, [])

    return (
        <>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-4 d-flex img-fluid" >
                    <img src="https://picsum.photos/500/300" alt="Movie" />
                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="card">
                            <h1>{movie.title}</h1>
                            <h3>{movie.director}</h3>
                            <p>{movie.plot}</p>
                            <Link className='btn btn-primary' to={`/`}>Torna alla Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h3><i>Our community reviews</i></h3>
                    </div>
                </div>
                {reviews.map((review) => {
                    return (
                        <div className="col-12" key={`review ${review.id}`}>
                            <div className="card">
                                <h3>{review.author}</h3>
                                <p>{review.text}</p>
                                <p>{review.vote}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MoviePage
