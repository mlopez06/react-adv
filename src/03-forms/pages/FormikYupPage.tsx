import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

    const { handleSubmit, touched, errors, getFieldProps} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                        .required('Requerido')
                        .max(15, 'Debe tener 15 caracteres o menos'),
            lastName: Yup.string()
                        .required('Requerido')
                        .max(10, 'Debe tener 10 caracteres o menos'),
            email: Yup.string()
                        .required('Requerido')
                        .email('Correo electrónico no válido'),
            
        })
    });

    return (
        <div>
            <h1>Formik Yup</h1>

            <form
                onSubmit={ handleSubmit }
                noValidate 
            >
                <label htmlFor="firstName">First name</label>
                <input type="text" { ...getFieldProps('firstName') } />
                {touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName">Last name</label>
                <input type="text" { ...getFieldProps('lastname') } />
                {touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

                <label htmlFor="email">Email</label>
                <input type="email" { ...getFieldProps('email') } />
                {touched.email && errors.email && <span>{ errors.email }</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
