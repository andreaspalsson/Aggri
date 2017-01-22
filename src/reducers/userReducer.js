import * as Actions from '../actions/userActions'
import Firebase from '../firebase'
const userInitialState = {
    signIn:{
        signInSuccessUrl: '/',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          /*Firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          Firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          Firebase.auth.GithubAuthProvider.PROVIDER_ID,*/
          Firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        signInFlow:'popup'
    }
}

export default (state = userInitialState, action) => {
    switch (action.type) {
        case Actions.SHOW_SIGN_IN:
            return {
                ...state,
                showSignIn: true
            }
        case Actions.SIGN_IN_SUCCESS:
            return {
                ...state,
                info: action.user
            }
        default:
            return state
    }
}