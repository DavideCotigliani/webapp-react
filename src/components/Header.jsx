import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
                    <Link >Aggiungi Libro</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Header
