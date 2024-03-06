## Use of Formik

We are using Formik, a third party library for form validation which is ease of use and has some default functions which we used to write as a seperate function for *intial values*, *onsubmit* and *validation schema*

```
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

```

This is how the Edit component works. The `useFormik` hook from Formik
library is used to handle the form's intial data and validate it against a Yup schema and onSubmit it will send API PUT method to the mock API.

Create component works in  similar way with  just one difference - it uses `post` method instead of `put`.

### Home

Just a simple landing page inspired from a designer.

### Body

This is where the Books are stored in card component which has edit and delete  buttons.

### Create and Edit Form


Both uses the same form with some little difference in style and base functionality. 

### Responsive

I used Tailwind CSS, Bootstrap css and media query  to make my application responsive. I am still in the learning phase of Tailwind css so that's why I used Bootstrap also.

In my upcoming project, will use Tailwind CSS alone.


Thank You!!!