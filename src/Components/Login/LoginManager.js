import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

// user logOut section
export const logOutHandler = () => {
    return firebase.auth().signOut().then(function () {
        const loggedOutUser = {
            displayName: '',
            email: '',
            isLoggedIn: false
        }
        return loggedOutUser;

    }).catch(function (error) {
        // An error happened.
    });
}

// google sign in handler
export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(function (result) {
            const user = result.user;
            const { displayName, email } = user;
            const signedInUser = {
                displayName: displayName,
                email: email,
                isLoggedIn: true
            }
            return signedInUser;
        })
        .catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}