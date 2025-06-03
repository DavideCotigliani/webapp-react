import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import axios from 'axios'

const HomePage = () => {
    const [movies, setMovies] = useState([])

    const fetchMovie = () => {
        axios.get("http://127.0.0.1:3000/api/movies/").then((resp) => {
            setMovies(resp.data)
        })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(fetchMovie, []);

    return (
        <>
            <h1 className='text-info'>Lista dei film</h1>
            <h2><i>La community che parla di film</i></h2>
            <div className="row">
                {movies.map((movie) => {
                    return <MovieCard movie={movie} key={`movie-${movie.id}`} />
                })}
            </div >
        </>
    )
}

export default HomePage
