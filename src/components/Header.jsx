import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:3000/api/movies/").then(res => setMovies(res.data))
    }, []);
    return (
        <nav className='navbar bg-dark'>
            <div className="container-fluid d-flex align-items-center">
                <ul className='nav-list mb-0 d-flex align-items-center '>
                    <li>
                        <img className='logo-image' src="/Amazon_Prime_Video_logo_(2024).svg.png" alt="" />
                    </li>
                    <li><Link to={"/"} >HomePage</Link></li>
                    <li><Link >Lista dei preferiti</Link></li>
                    <li><Link >Recenti</Link></li>
                    <li><Link >Generi</Link></li>
                    <li><Link >Profilo</Link></li>
                    <li className='dropdown'>
                        <button className='btn btn-secondary dropdown-toggle' data-bs-toggle="dropdown">Aggiungi Recensione</button>
                        <ul className='dropdown-menu'>
                            {movies.map(movie => (
                                <li key={movie.id}>
                                    <Link className='dropdown-item' to={`/movies/${movie.id}`}>
                                        {movie.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
