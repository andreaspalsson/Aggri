import React, { Component } from 'react';

import firebase from '../firebase';
import * as firebaseui from 'firebaseui';

const authUi = new firebaseui.auth.AuthUI(firebase.auth());


class SignIn extends Component {

    componentDidMount() {
        var self = this;
        var uiConfig = {
            ...self.props.options,
            'callbacks': {
                'signInSuccess': function (user) {
                    console.log("Sign ok", user);
                    if (self.props.onSignIn) {
                        self.props.onSignIn(user);
                    }
                    return false;
                }
            }
        };
        authUi.start('#firebaseui-auth', uiConfig);
    }


    componentWillUnmount() {
        authUi.reset();
    }

    render() {
        return (
            <div id="firebaseui-auth"></div>
        );
    }
}


export default SignIn;
