import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h2>404-Page not found</h2>
            <p className='mt-3'>Ci dispiace informati che la pagina che hai cercato non esiste</p>
            <Link to='/' className='btn btn-primary'> Torna alla Homepage</Link>
        </div>
    )
}

export default NotFoundPage
