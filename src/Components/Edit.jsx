import axios from 'axios';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


const Edit = ({ id }) => {// Other imports and code...


    const [editData, setEditData] = useState({
        title: '',
        author: '',
        author_birthday: '',
        description: '',
        publication_date: '',
        isbn: ''
    });
    const navigate = useNavigate()
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await axios.get(`https://65e480343070132b3b24d97f.mockapi.io/books/${id}`)
            .then(res => setEditData(res.data))
            .catch((err) => console.log(err))



    }
    const schema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        author: Yup.string().required('Author is required'),
        author_birthday: Yup.string().required('Author Birthday is required'),
        description: Yup.string().required('Author Description is required'),
        isbn: Yup.string().required('ISBN  is required'),
        publication_date: Yup.string().required('Publication Date  is required'),

    })
    useEffect(() => {
        formik.setValues(editData);
    }, [editData])
    // const handleSubmit = async (values) => {
    //     await axios.put(`https://65e480343070132b3b24d97f.mockapi.io/books/${id}`, values)
    //         .then(res => console.log(res.data))
    //         .catch((err) => console.log(err))
    //     navigate('/body')
    // }
    const handleChange = (e) => {
        const { name, value } = e.target
        setEditData((preData) => ({
            ...preData, [name]: value
        }))
    }
    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            author_birthday: '',
            description: '',
            publication_date: '',
            isbn: ''
        },
        schema,
        onSubmit: async (values) => {
            await axios.put(`https://65e480343070132b3b24d97f.mockapi.io/books/${id}`, values)
                .then(res => console.log(res.data))
                .catch((err) => console.log(err))
            navigate('/body')
        }
    })
    return (
        <div>
            Edit {id}
            <div className='body ' id='form'>
                <div className='containeR mt-3 d-flex justify-content-center'  >
                    <form className='row ' onSubmit={formik.handleSubmit} >
                        <div className='fs-4 edit'>Edit Form</div>

                        <div className='col-12 form-floating'>
                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.title} name='title' placeholder='Title' onChange={handleChange} required />
                            <label className='ms-2' for='floatingInput'>Title</label>
                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' value={formik.values.author} name='author' placeholder='Author' onChange={handleChange} required />
                            <label className='ms-2' for='floatingInput'>Author</label>

                        </div>
                        <div className='col-12  form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.author_birthday} placeholder='author_birthday' name='author_birthday' onChange={handleChange} required />
                            <label className='ms-2' for='floatingInput'>Birthday</label>

                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.description} placeholder='Description' name='description' onChange={handleChange} required />
                            <label className='ms-2' for='floatingInput'>Description</label>

                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.isbn} placeholder='ISBN' name='isbn' onChange={handleChange} required />
                            <label className='ms-2' for='floatingInput'>ISBN</label>

                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.publication_date} name='publication_date' placeholder='Publication Date' onChange={handleChange} required />

                            <label className='ms-2' for='floatingInput'>Publication_ Date</label>
                        </div>
                        
                        <div className='col-12 mt-4'>

                            <button className='btn btn-primary' type='submit'>Update</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Edit;