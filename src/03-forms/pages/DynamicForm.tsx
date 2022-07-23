import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';

import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any} = {};
const requiredErrors: { [key: string]: any} = {};

for (const field of formJson) {
    initialValues[field.name] = field.value;

    if (!field.validations) continue;

    let schema = Yup.string();

    for (const validation of field.validations) {
        if(validation.type === 'required') {
            schema = schema.required(validation.error);
        }

        if(validation.type === 'minLength') {
            schema = schema.min((validation as any).value ,validation.error);
        }

        if(validation.type === 'email') {
            schema = schema.email(validation.error);
        }

        requiredErrors[ field.name ] = schema;
    }
}

const validationSchema = Yup.object(requiredErrors);

export const DynamicForm = () => {

    return (
        <div>
            <h1>Dynamic Form</h1>
            
            <Formik
                initialValues= { initialValues }
                onSubmit={(values) =>{
                    console.log(values)
                }}
                validationSchema={ validationSchema }
            >
                {
                    (formik) => (
                        <Form
                            noValidate
                        >
                            {
                                formJson.map( ({ name, label, placeholder, type, options }) => {
                                    switch (type) {
                                        case 'text':
                                        case 'email':
                                        case 'password':
                                            return (
                                                <MyTextInput
                                                    key={ name }
                                                    name={ name }
                                                    label={ label }
                                                    placeholder={ placeholder }
                                                    type={ type as any }
                                                />
                                            )
                                        
                                        case 'select':
                                            return (
                                                <MySelect 
                                                    key={ name }
                                                    label={ label } 
                                                    name={ name } 
                                                >
                                                    <option key="" value="" >Select an option</option>
                                                    {
                                                        options?.map(({ id, label }) => (
                                                            <option key={ id } value={ id } >{ label }</option>
                                                        ))
                                                    }
                                                </MySelect>
                                            )
                                    
                                        default:
                                            throw new Error(`El type ${ type } no está soportado`);
                                    }
                                })
                            }

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
