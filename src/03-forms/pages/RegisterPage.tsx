import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { name, email, password1, password2, formData,  handleInputChange, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form
                noValidate
                onSubmit={ handleSubmit }
            >
                <input 
                    type="text"
                    placeholder="Name" 
                    value={ name }
                    onChange={ handleInputChange }
                    name="name"
                />
                { (name.trim().length === 0) && <span>El campo es requerido</span> }

                <input 
                    type="email"
                    placeholder="Email" 
                    value={ email }
                    onChange={ handleInputChange }
                    name="email"
                />
                { !isValidEmail(email) && <span>El email no es válido</span> }

                <input 
                    type="password"
                    placeholder="Password" 
                    value={ password1 }
                    onChange={ handleInputChange }
                    name="password1"
                />
                { (password1.trim().length === 0) && <span>El campo es requerido</span> }

                <input 
                    type="password"
                    placeholder="Repeat password" 
                    value={ password2 }
                    onChange={ handleInputChange }
                    name="password2"
                />
                { (password2.trim().length === 0) && <span>El campo es requerido</span> }

                <button type="submit">
                    Create
                </button>

            </form>
        </div>
    )
}
