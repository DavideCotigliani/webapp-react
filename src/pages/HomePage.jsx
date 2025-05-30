import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <h1 className='text-primary'>Lista dei film</h1>
            <h2><i>La community che parla di film</i></h2>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-image-top">
                        <img src="https://picsum.photos/500/300" className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="card-body">
                    <h3 className='text-primary'> Titolo film</h3>
                    <h4>Regista</h4>
                    <p>Trama</p>
                    <Link className='btn btn-primary' to={`/movies/1`}>Leggi tutto</Link>
                </div>
            </div>
        </>
    )
}

export default HomePage
