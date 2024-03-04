import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ item, setId }) => {
    const navigate = useNavigate()


    const handleEdit = (id) => {

        setId(id)

        navigate(`/edit/${id}`)
    }
    

    return (
        <div className='card '>
            <img src='...' alt='image' />
            <h1 className='text-3xl'>{item.title}</h1>
            <h3>{item.author}</h3>
            <h3>{item.publication_date}</h3>
            <h3>{item.isbn}</h3>
            <h3>{item.author_birthday}</h3>
            <h3>{item.description}</h3>
            <button className='btn' onClick={() => handleEdit(item.id)}>Edit</button>
            <button className='btn' onClick={() => handleEdit(item.id)}>Delete</button>
        </div>
    );
};

export default Card;