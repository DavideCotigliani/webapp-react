import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar bg-dark'>
            <div className="container-fluid flex-column d-flex align-items-center">
                <Link className='navbar-brand text-light mb-3' to={"/"}> Logo </Link>
                <ul className='nav-list mb-0'>
                    <li><Link >HomePage</Link></li>
                    <li><Link >Lista dei preferiti</Link></li>
                    <li><Link >Recenti</Link></li>
                    <li><Link >Generi</Link></li>
                    <li><Link >Profilo</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
