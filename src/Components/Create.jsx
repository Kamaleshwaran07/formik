import axios from 'axios';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import '../edit.css'


const Create = ({ }) => {


    const [data, setData] = useState({
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
        await axios.get(`https://65e480343070132b3b24d97f.mockapi.io/books/`)
            .then(res => setData(res.data))
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

    // const handleSubmit = async (values) => {
    //     await axios.put(`https://65e480343070132b3b24d97f.mockapi.io/books/${id}`, values)
    //         .then(res => console.log(res.data))
    //         .catch((err) => console.log(err))
    //     navigate('/body')
    // }
    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setData((preData) => ({
    //         ...preData, [name]: value
    //     }))
    // }
    const formik = useFormik({
        initialValues: {
            data
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            await axios.post(`https://65e480343070132b3b24d97f.mockapi.io/books`, values)
                .then(res => console.log(res.data))
                .catch((err) => console.log(err))
            navigate('/body')
        }
    })
    return (
        <div className='bg-sky-500/30'>

            <div className='body ' id='form'>
                <div className='container mt-3 d-flex justify-content-center' id='container' >
                    <form className='row ' onSubmit={formik.handleSubmit} >
                        <div className='fs-4 edit'>Create Form</div>

                        <div className='col-12 form-floating'>
                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.title} name='title' placeholder='Title' onChange={formik.handleChange} />
                            {formik.touched.title && formik.errors.title && (
                                <div className='text-danger'>{formik.errors.title}</div>
                            )}
                            <label className='ms-2' for='floatingInput'>Title</label>
                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' value={formik.values.author} name='author' placeholder='Author' onChange={formik.handleChange} />
                            {formik.touched.author && formik.errors.author && (
                                <div className='text-danger'>{formik.errors.author}</div>
                            )}
                            <label className='ms-2' for='floatingInput'>Author</label>
                        </div>
                        <div className='col-12  form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.author_birthday} placeholder='author_birthday' name='author_birthday' onChange={formik.handleChange} />
                            {formik.touched.author_birthday && formik.errors.author_birthday && (
                                <div className='text-danger'>{formik.errors.author_birthday}</div>
                            )}
                            <label className='ms-2' for='floatingInput'>Birthday</label>
                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.description} placeholder='Description' name='description' onChange={formik.handleChange} />
                            {formik.touched.description && formik.errors.description && (
                                <div className='text-danger'>{formik.errors.description}</div>
                            )}
                            <label className='ms-2' for='floatingInput'>Description</label>
                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.isbn} placeholder='ISBN' name='isbn' onChange={formik.handleChange} />
                            {formik.touched.isbn && formik.errors.isbn && (
                                <div className='text-danger'>{formik.errors.isbn}</div>
                            )}
                            <label className='ms-2' for='floatingInput'>ISBN</label>
                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.publication_date} name='publication_date' placeholder='Publication Date' onChange={formik.handleChange} />

                            {formik.touched.publication_date && formik.errors.publication_date && (
                                <div className='text-danger'>{formik.errors.publication_date}</div>
                            )}
                            <label className='ms-2' for='floatingInput'>Publication_ Date</label>
                        </div>

                        <div className='col-12 mt-4 button'>

                            <button className='btn btn-outline-primary' type='submit'>Create</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Create;