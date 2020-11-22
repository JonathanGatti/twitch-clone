import { type } from 'os';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { signInAction, signOutAction} from '../actions';

const clientId = '400044498365-5e4388knj15icbuqtblgusqhiomtl74u.apps.googleusercontent.com';

interface Props  {
  isSignedIn: boolean | undefined;
  signInAction: Function;
  signOutAction: Function;
}

function GoogleAuth(props: Props): JSX.Element {
  const {isSignedIn, signInAction, signOutAction} = props;

  useEffect(():void => {
    window.gapi.load('client:auth2', (): void => {
      window.gapi.client.init({
        clientId: clientId,
        scope: 'email'
      }).then((): void => {
        let auth = window.gapi.auth2.getAuthInstance();
        onAuthChange(auth.isSignedIn.get());
        auth.isSignedIn.listen(onAuthChange);
      })
    })
  },[])

  const onAuthChange = (isSignedIn: boolean): void => {
    if(isSignedIn) signInAction();
    else if(!isSignedIn) signOutAction();
  }
  
  const handleSignInButton = (): void => {
    window.gapi.auth2.getAuthInstance().signIn()
  }

  const handleSignOutButton = (): void => {
    window.gapi.auth2.getAuthInstance().signOut()
  }

  const renderAuthButton = (): JSX.Element | undefined => {
    if(isSignedIn === undefined) return undefined;
    else if (isSignedIn) return (
      <button onClick={handleSignOutButton} className='ui red google button'>
        <i className='google icon'/>
        Sign Out
      </button>
    )
    else if (!isSignedIn) return (
      <button onClick={handleSignInButton} className='ui green google button'>
        <i className='google icon'/>
        Sign In
      </button>
    );
  }

  return (
    <div>
      {renderAuthButton()}
    </div>
  )
}
interface UserState {
  isSignedIn: boolean | undefined,
  auth: any
}

const mapStateToProps = (state: UserState): { isSignedIn: boolean } => {
  return {isSignedIn : state.auth.isSignedIn }
}
export default connect(mapStateToProps, {signInAction, signOutAction})(GoogleAuth);