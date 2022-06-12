import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase-init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateToRegister = () => {
        navigate('/register');
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div className='container w-50'>
            <h1 className='text-primary mt-2 mb-4'>Please Login</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 fs-5' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-2 fs-6'>New to Self Teaching Provider? <span style={{ cursor: "pointer" }} className='text-primary' onClick={navigateToRegister}>Please Register</span></p>
        </div>
    );
};

export default Login;