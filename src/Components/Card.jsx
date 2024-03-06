import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Image from '../assets/Thegreatgasby.jpeg';
import '../card.css'


const Card = ({ item, setId }) => {
    const navigate = useNavigate()


    const handleEdit = (id) => {

        setId(id)

        navigate(`/edit/${id}`)
    }
    const handleDelete = async (id) => {
        await axios.delete(`https://65e480343070132b3b24d97f.mockapi.io/books/${id}`)
            .then(res => { console.log('Deleted', res.data.id) })
            .catch(err => console.error("Error deleting book", err))
        navigate('/body')
    }

    return (
        <div className='card josefin-sans pb-0'>
            <img src={item.cover_image_url} height={'100px'} className='image card-img-top' alt='image' />
            <div className='container context mt-2 mb-3'>
                <h1 className='text-3xl josefin-sans'>{item.title}</h1>
                <h3><strong className='text-orange-700'>Publication Date: </strong>{item.publication_date}</h3>
                <h3><strong className='text-orange-700'>ISBN:</strong> {item.isbn}</h3>
                <h3><strong className='text-orange-700'>Author:</strong> {item.author}</h3>
                <h3><strong className='text-orange-700'>Birthday: </strong>{item.author_birthday}</h3>
                <h3><strong className='text-orange-700'>Brief:</strong> {item.description}</h3>

            </div>
            <footer className='mt-2 d-flex justify-content-center card-footer p-2'>

                <button className='btn btn-danger d-flex justify-content-center p-2 me-2 ' onClick={() => handleDelete(item.id)}>Delete</button>
                <button className='btn btn-primary d-flex justify-content-center p-2 me-2 ' onClick={() => handleEdit(item.id)}>Edit</button>
            </footer>
        </div>
    );
};

export default Card;