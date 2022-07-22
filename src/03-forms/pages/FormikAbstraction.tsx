import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues= {{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit= {(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                    .required('Requerido')
                                    .max(15, 'Debe tener 15 caracteres o menos'),
                        lastName: Yup.string()
                                    .required('Requerido')
                                    .max(10, 'Debe tener 10 caracteres o menos'),
                        email: Yup.string()
                                    .required('Requerido')
                                    .email('Correo electrónico no válido'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Debe aceptar los terminos y condiciones'),
                        jobType: Yup.string()
                                    .required('Requerido')
                                    .notOneOf(['it-jr'], 'Esta opción no es permitida')
                    })
                }
            >
                {
                    <Form>
                        <MyTextInput 
                            label="First name" 
                            name="firstName"
                            placeholder="Marlon" 
                        />

                        <MyTextInput 
                            label="Last name" 
                            name="lastName"
                            placeholder="López" 
                        />

                        <MyTextInput 
                            label="Email" 
                            name="email"
                            type="email"
                            placeholder="milo@gmail.com" 
                        />

                        <MySelect label="Job type" name="jobType" >
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </MySelect>

                        <MyCheckbox label="Terminos y condiciones" name="terms" />

                        <button type="submit">Submit</button>
                    </Form>
                }
            </Formik>
            
        </div>
    )
}
