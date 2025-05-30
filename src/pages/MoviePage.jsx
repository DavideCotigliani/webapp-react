import React from 'react'
import { Link } from 'react-router-dom'
const MoviePage = () => {
    return (
        <>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-4 d-flex img-fluid" >
                    <img src="https://picsum.photos/500/300" alt="Movie" />
                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="card">
                            <h1>Titolo del film</h1>
                            <h3>Regista</h3>
                            <p>Trama</p>
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
            </div>
        </>
    )
}

export default MoviePage
