import Firebase from '../firebase';

const database = Firebase.database().ref('/users')

export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export function fetchCurrentUser() {
    return dispatch => {
        Firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            dispatch(signInSuccess(user));
        },
            (error) => {
                console.log(error);
            });

    };
}

export const SHOW_SIGN_IN = "SHOW_SIGN_IN";
export function showSignIn() {
    return {
        type: SHOW_SIGN_IN
    };
}

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export function signInSuccess(user) {
    //Save user to database

    return dispatch => {
        dispatch(
            {
                type: SIGN_IN_SUCCESS,
                user
            }
        );

        //Check if it's a new user
       /* database.child(user.uid).set({
            provider: user.provider,
            name: user.displayName,
            email: user.email
            //some more user data
        });
        */

    };
}

export const SIGN_OUT_USER = "SIGN_OUT_USER";
export function signOutUser() {
    return dispatch => {
        Firebase.auth().signOut().then(function () {
            dispatch(signInSuccess(null));
        }, function (error) {
            console.log(error);
        });
    }
}