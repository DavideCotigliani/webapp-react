// // import React from 'react'
// // import { useState } from 'react';
// // import axios from 'axios';
// // import { Link, useNavigate } from 'react-router-dom';
// // const initialData = {
// //     title: "",
// //     author: "",
// //     abstract: "",
// //     image: null
// // }

// const CreateMoviePage = () => {
//     const [formData, setFormData] = useState(initialData)
//     const navigate = useNavigate()
//     const setFieldValue = (e) => {
//         const { value, name } = e.target;
//         // controllo se il nome del campo che ho catturato tramite event è image
//         if (name === 'image') {
//             setFormData({ ...formData, image: e.target.files[0] })
//         }
//         else {
//             setFormData({ ...formData, [name]: value })
//         }
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         // chiamata AJAX, in questo caso dobbiamo inviare anche files. quindi dobbiamo aggiungere come terzo parametro l
//         // l'indicazione ch eli stiamo inviando. dobbiamo indicare multipart/form-data
//         axios.post(`http://127.0.0.1:3000/api/movies/`, formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//         }).then((result) => {
//             navigate("/")
//         })

//     }
//     return (
//         <div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <h2>Creazione nuovo film</h2>
//                     </div>
//                     <div className="col-12">
//                         <form onSubmit={handleSubmit}>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <label htmlFor="" className='control-laberl'>Titolo</label>
//                                     <input type="text" className='form-control' value={formData.title} onChange={setFieldValue} required />
//                                 </div>
//                                 <div className="col-12">
//                                     <label htmlFor="" className='control-laberl'>autore</label>
//                                     <input type="text" className='form-control' value={formData.author} onChange={setFieldValue} required />
//                                 </div>
//                                 <div className="col-12">
//                                     <label htmlFor="" className='control-laberl'>abstract</label>
//                                     <input type="text" className='form-control' value={formData.abstract} onChange={setFieldValue} required />
//                                 </div>
//                                 <div className="col-12">
//                                     <label htmlFor="" className='control-laberl'>copertina</label>
//                                     <input type="file" name='image' id='image' className='form-control' required />
//                                 </div>
//                                 <div className="col-12">
//                                     <button>Invia</button>
//                                 </div>

//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CreateMoviePage
