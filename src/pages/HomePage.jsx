import React, { useState, useEffect, useContext } from 'react'
import MovieCard from '../components/MovieCard'
import axios from 'axios'
import Loader from '../components/Loader'
import GlobalContext from '../contexts/globalContext'

const HomePage = () => {
    const [movies, setMovies] = useState([])
    const { setIsLoading } = useContext(GlobalContext)

    const fetchMovie = () => {
        setIsLoading(true) //imposto a true il valore della variabile di stato 
        axios.get("http://127.0.0.1:3000/api/movies/").then((resp) => {
            setTimeout(() => {
                setMovies(resp.data)
                setIsLoading(false)
            }, 2000)
        })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(fetchMovie, []);

    return (
        <>
            <Loader></Loader>
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
