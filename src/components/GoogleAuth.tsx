import React, {useEffect, useState} from 'react';

const clientId = '400044498365-5e4388knj15icbuqtblgusqhiomtl74u.apps.googleusercontent.com'

function GoogleAuth(): JSX.Element {
  let [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);

  useEffect(():void => {
    window.gapi.load('client:auth2', (): void => {
      window.gapi.client.init({
        clientId: clientId,
        scope: 'email'
      }).then((): void => {
        let auth = window.gapi.auth2.getAuthInstance();
        setIsSignedIn(isSignedIn = auth.isSignedIn.get());
        auth.isSignedIn.listen(onAuthChange);
      })
    })
  },[])

  const onAuthChange = (): void => {
    let auth = window.gapi.auth2.getAuthInstance();
    setIsSignedIn(isSignedIn = auth.isSignedIn.get());
  }
  
  const handleSignInButton = (): void => {
    window.gapi.auth2.getAuthInstance().signIn()
  }

  const handleSignOutButton = (): void => {
    window.gapi.auth2.getAuthInstance().signOut()
  }

  const renderAuthButton = (): JSX.Element | undefined => {
    if(isSignedIn === null) return undefined;
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

export default GoogleAuth;