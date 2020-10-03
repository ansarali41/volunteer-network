import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Register = () => {
    const { volKey } = useParams()
    console.log('volunteer key', volKey);
    return (
        <div className="container text-center mt-5">
            <div className="mb-2">
                <Link to="/home">
                    <img style={{ width: '180px' }} src="https://i.ibb.co/0DwF3w5/main-logo.png" alt="" />
                </Link>
            </div>
            <div>
                <h3>Register as a Volunteer</h3>
            </div>
        </div>
    );
};

export default Register;