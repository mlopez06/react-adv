import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponentsPage = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues= {{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobtype: ''
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
                        jobtype: Yup.string()
                                    .required('Requerido')
                                    .notOneOf(['it-jr'], 'Esta opción no es permitida')
                    })
                }
            >
                {
                    <Form>
                        <label htmlFor="firstName">First name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span" />

                        <label htmlFor="lastName">Last name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="span" />

                        <label>
                            <Field name="terms" type="checkbox" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span" />

                        <label htmlFor="jobtype">Job type</label>
                        <Field name="jobtype" as="select">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </Field>
                        <ErrorMessage name="jobtype" component="span" />

                        <button type="submit">Submit</button>
                    </Form>
                }
            </Formik>
            
        </div>
    )
}
