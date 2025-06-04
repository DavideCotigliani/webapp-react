import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ReviewForm = ({ movie_id, reloadReviews }) => {
    // definizione dei valori iniziali della form
    const initialData = { name: "", vote: "", text: "" };

    // definisco la variabile di stato Formdata
    const [formData, setFormData] = useState(initialData)

    // definizione della funzione che mi cambia i valori dei campi input
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    // chiamata AJAX
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://127.0.0.1:3000/api/movies/${movie_id}/review`, formData, {
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            setFormData(initialData);
            reloadReviews();
        })
    }
    return (
        <div className='card mt-3'>
            <div className="card-header">
                <h4>Aggiungi la tua recensione</h4>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="">Name
                            <input type="text" className="form-control" name='name' placeholder='nome' value={formData.name} onChange={setFieldValue} required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Vote
                            <input type="text" className="form-control" name='vote' placeholder='voto' value={formData.vote} onChange={setFieldValue} required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Text
                            <textarea type="text" className="form-control" name='text' placeholder='testo' value={formData.text} onChange={setFieldValue} required />
                        </label>
                    </div>
                    <button className='btn btn-primary'>Salva</button>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm
