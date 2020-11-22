import React, {useEffect, useState} from 'react';

const clientId = '400044498365-5e4388knj15icbuqtblgusqhiomtl74u.apps.googleusercontent.com'

function GoogleAuth(): JSX.Element {
  let [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(():void => {
    window.gapi.load('client:auth2', (): void => {
      window.gapi.client.init({
        clientId: clientId,
        scope: 'email'
      }).then((): void => {
        let auth = window.gapi.auth2.getAuthInstance();
        setIsSignedIn(isSignedIn = auth.isSignedIn.get())
      })
    })
  },[])

  const renderAuthButton = (): JSX.Element => {
    if(!isSignedIn) return <div>Not signed in </div>;
    else return <div>I am signed in</div>;
  }
  
  return (
    <div>
      {renderAuthButton()}
    </div>
  )
}

export default GoogleAuth;