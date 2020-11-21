import React, {useEffect} from 'react';

const clientId = '400044498365-5e4388knj15icbuqtblgusqhiomtl74u.apps.googleusercontent.com'

function GoogleAuth(): JSX.Element {
  useEffect(():void => {
    window.gapi.load('cliant:auth2', (): void => {
      window.gapi.client.init({
        clientId: clientId,
        scope: 'email'
      });
    })
  },[])
  return (
    <div>
      Google Auth
    </div>
  )
}

export default GoogleAuth;