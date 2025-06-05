import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ReviewForm = ({ movie_id, reloadReviews }) => {
    // definizione dei valori iniziali della form
    const initialData = { name: "", vote: "", text: "" };

    // definisco la variabile di stato Formdata
    const [formData, setFormData] = useState(initialData)

    //definizione della funzione che ci indica se la form è valida o meno
    const [isFormValid, setIsFormValid] = useState(true);

    //definizione della funzione che ci permette di verificare se la form è valida o meno
    const validateForm = () => {
        //controllo se i campi della form sono vuoti. Se almeno uno dei campi è vuoto restituisco false
        if (formData.name === "" || formData.text === "" || formData.vote === "") {
            return false
        }
        // verifico se il voto è numerico e se è inferiore a 0 o superiore a 5
        //se è numerico o meno, se è una stringa ci dà true, se è numero false
        if (isNaN(formData.vote) || formData.vote < 0 || formData.vote > 5) {
            return false;
        }
        return true
    }

    // definizione della funzione che mi cambia i valori dei campi input
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    // chiamata AJAX
    const handleSubmit = (e) => {
        e.preventDefault();
        //effettuo la validazione richiamando il metodo validateForm definito prima
        if (validateForm() === false) {
            setIsFormValid(false);
            return;
        }
        axios.post(`http://127.0.0.1:3000/api/movies/${movie_id}/review`, formData, {
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            setIsFormValid(true);
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
                {isFormValid === false && <div className='alert alert-danger mb-3'> I dati della form non sono validi </div>}
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
