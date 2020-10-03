import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }

    const[user, setUser]=useContext(UserContext);
    let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

    const googleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const {displayName, email}=user;
                const newUser = {
                    name:displayName,
                    email:email,
                    isLoggedIn: false
                }
                setUser(newUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
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
                <Button variant="light" className="bg-white p-2 login-btn" onClick={googleLogin}> <FontAwesomeIcon className="text-primary" icon={faGoogle} /> Continue with Google</Button>
            </div>
        </div>
    );
};

export default Login;