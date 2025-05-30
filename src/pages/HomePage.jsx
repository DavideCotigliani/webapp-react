import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

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

const HomePage = () => {
    const [movies, setMovies] = useState(initialMovies)
    return (
        <>
            <h1 className='text-primary'>Lista dei film</h1>
            <h2><i>La community che parla di film</i></h2>
            <div className="row g y-4">
                {movies.map((movie) => {
                    return <MovieCard movie={movie} key={`movie-${movie.id}`} />
                })}
            </div >
        </>
    )
}

export default HomePage
