import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ReviewForm = () => {
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
        axios.post(`http://127.0.0.1:3000/api/movies/${id}/review`, formData, {
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            setFormData(initialData)
        })
    }
    return (
        <div className='card'>
            <div className="card-header">
                <h4>Aggiungi la tua recensione</h4>
            </div>
            <div className="card-body">
                <form >
                    <div className="form-group">
                        <label htmlFor="">Name
                            <input type="text" className="form-control" name='name' placeholder='nome' value={formData.name} required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Name
                            <input type="text" className="form-control" name='name' placeholder='nome' required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Name
                            <input type="text" className="form-control" name='vote' placeholder='voto' required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Testo</label>
                        <textarea name="text" id=""></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm
