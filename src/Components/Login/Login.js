import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import { UserContext } from '../../App';
import { handleGoogleSignIn, initializeFirebase } from './LoginManager';

const Login = () => {
    initializeFirebase()
    const [user, setUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    // google sign 
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                history.replace(from);
            })
    }


    return (
        <div className="container text-center mt-5">
            <div className="mb-2">
                <Link to="/home">
                    <img style={{ width: '180px' }} src="https://i.ibb.co/0DwF3w5/main-logo.png" alt="" />
                </Link>
            </div>
            <div className="login-section">
                <h3>Login With</h3>
                <Button variant="light" className="bg-white p-2 login-btn" onClick={googleSignIn}> <FontAwesomeIcon className="text-primary" icon={faGoogle} /> Continue with Google</Button>
            </div>
        </div>
    );
};

export default Login;