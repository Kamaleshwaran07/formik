import axios from 'axios';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import '../edit.css'


const Edit = ({ id }) => {

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
        title: Yup.string().required('Enter the title of the book'),
        author: Yup.string().required('Enter the Author Name'),
        author_birthday: Yup.string().required('Enter Author"s Birthday'),
        description: Yup.string().required('Little bit of Description is required'),
        isbn: Yup.string().required('ISBN number is required for Identification'),
        publication_date: Yup.string().required('Publication Date is required'),

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
        validationSchema: schema,
        onSubmit: async (values) => {
            await axios.put(`https://65e480343070132b3b24d97f.mockapi.io/books/${id}`, values)
                .then(res => console.log(res.data))
                .catch((err) => console.log(err))
            navigate('/body')
        }
    })
    return (
        <div className='body bg-orange-500/30'>
            <header className='text-emerald-800 text-bold text-xl p-4'>You are editing the Book Number: {id}</header>
            <div className='body ' id='form'>
                <div className='container mt-3 d-flex justify-content-center' id='container'>
                    <form className='row ' onSubmit={formik.handleSubmit} >
                        <div className='fs-4 edit'>Edit Form</div>

                        <div className='col-12 form-floating mt-6'>
                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.title} name='title' placeholder='Title' onChange={handleChange} />
                            {formik.touched.title && formik.errors.title && (
                                <div className='text-danger'>{formik.errors.title}</div>
                            )}
                            <label className='ms-2' for='floatingInput'>Title</label>
                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' value={formik.values.author} name='author' placeholder='Author' onChange={handleChange} />
                            <label className='ms-2' for='floatingInput'>Author</label>
                            {formik.touched.author && formik.errors.author && (
                                <div className='text-danger'>{formik.errors.author}</div>
                            )}
                        </div>
                        <div className='col-12  form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.author_birthday} placeholder='author_birthday' name='author_birthday' onChange={handleChange} />
                            <label className='ms-2' for='floatingInput'>Birthday</label>
                            {formik.touched.author_birthday && formik.errors.author_birthday && (
                                <div className='text-danger'>{formik.errors.author_birthday}</div>
                            )}
                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.description} placeholder='Description' name='description' onChange={handleChange} />
                            <label className='ms-2' for='floatingInput'>Description</label>
                            {formik.touched.description && formik.errors.description && (
                                <div className='text-danger'>{formik.errors.description}</div>
                            )}
                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.isbn} placeholder='ISBN' name='isbn' onChange={handleChange} />
                            <label className='ms-2' for='floatingInput'>ISBN</label>
                            {formik.touched.isbn && formik.errors.isbn && (
                                <div className='text-danger'>{formik.errors.isbn}</div>
                            )}
                        </div>
                        <div className='col-12 form-floating'>

                            <input type='text' className='form-text form-control' id='floatingInput' value={formik.values.publication_date} name='publication_date' placeholder='Publication Date' onChange={handleChange} />

                            <label className='ms-2' for='floatingInput'>Publication_ Date</label>
                            {formik.touched.publication_date && formik.errors.publication_date && (
                                <div className='text-danger'>{formik.errors.publication_date}</div>
                            )}
                        </div>

                        <div className='col-12 mt-4 button'>

                            <button className='btn bg-sky-500' type='submit'>Update</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Edit;