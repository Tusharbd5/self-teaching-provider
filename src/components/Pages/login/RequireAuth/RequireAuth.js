import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase-init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (!(user.emailVerified)) {
        return <div>
            <h3 className='text-danger'>Email is not verified</h3>
            <p><small className='text-success'>Please verify your email</small></p>
            {errorElement}
            <button onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
            }}
                className='btn btn-success'>Send Email</button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;