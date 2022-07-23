import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                .required('Requerido')
                                .min(2, 'Debe tener 2 caracteres o más')
                                .max(15, 'Debe tener 15 caracteres o menos'),
                        email: Yup.string()
                                .required('Requerido')
                                .email('El correo electrónico ingresado no es válido'),
                        password1: Yup.string()
                                .required('Requerido')
                                .min(6, 'Debe tener 6 caracteres o más'),
                        password2: Yup.string()
                                .min(6, 'Debe tener 6 caracteres o más')
                                .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                    })
                }
            >
                { ({handleReset}) => (
                    <Form>
                        <MyTextInput 
                            label="Name" 
                            name="name" 
                            placeholder="Marlon López" 
                        />

                        <MyTextInput 
                            label="Email" 
                            name="email" 
                            placeholder="marlonlopez@gmail.com"
                            type="email" 
                        />

                        <MyTextInput 
                            label="Password" 
                            name="password1" 
                            type="password" 
                        />

                        <MyTextInput 
                            label="Confirm password" 
                            name="password2" 
                            type="password" 
                        />

                        <button type="submit">
                            Create
                        </button>

                        <button onClick={ handleReset }>
                            Reset
                        </button>

                    </Form>
                ) }

            </Formik>
        </div>
    )
}
