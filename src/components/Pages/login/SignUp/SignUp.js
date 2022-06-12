import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase-init';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }

    const navigateToLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='container w-50'>
            <h1 className='text-primary mt-2 mb-4'>Sign Up</h1>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 fs-5' variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p className='mt-2 fs-6'>Already Have An Account? <span style={{ cursor: "pointer" }} className='text-primary' onClick={navigateToLogin}>Please Login</span></p>
        </div>
    );
};

export default SignUp;