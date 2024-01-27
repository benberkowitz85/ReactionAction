import { useState } from 'react';
import { validateEmail } from '../util/helpers';

function Contact() {
    // Using useState, we can initialize the state of the form with an empty name, email, and message property.
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // Using object destructuring, we can extract the name, email, and message properties from formState into their own variables.
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // Using the onBlur prop, we can call the handleChange function when a user leaves an input field, but only if the field has been filled out incorrectly.
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement. Error message set to empty if email is valid. If email is invalid, error message is set to 'Please enter a valid email address.'
            if (!isValid) {
                setErrorMessage('Please enter a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            // If the name field is empty, an error message is set to 'Name is required.' If the name field is filled out, the error message is set to empty.
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // If there is no error message, the formState is updated with either the name, email, or message value from the appropriate input field.
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            alert(`Thank you for your message, ${name}!`);
        };
    }

    return (
        <section className="p-4 my-8">
            <h1 className="font-bold mb-4">Contact Me</h1>
            <form id="contact-form" className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                {/* submit button currently doesn't send a message, just logs formState variable. Will try to implement in future dev. For now just thanks user for submitting. */}
                <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" type="submit">Submit</button>
            </form>
        </section>
    );

}


export default Contact;