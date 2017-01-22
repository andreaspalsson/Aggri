import Firebase from '../firebase';


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
    return {
        type: SIGN_IN_SUCCESS,
        user
    }
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