import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions/userActions'

import SignIn from './signIn';


class User extends Component {


  componentWillMount() {
    this.props.fetchCurrentUser();
  }


  render() {
    const {user} = this.props;
    let welcomeOrSignin = <button onClick={this.props.showSignIn}>Sign in</button>;

    if(user.info && user.info.displayName){
      welcomeOrSignin = <div>
      <span>Welcom, {user.info.displayName}</span>
      <button onClick={this.props.signOutUser}>Sign out</button>
      </div>
    }

    return (
      <div>
        {welcomeOrSignin}
        {user.showSignIn ? <SignIn onSignIn={this.props.signInSuccess} options={user.signIn} /> : false}
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
