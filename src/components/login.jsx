import React from 'react'
import {auth,provider} from '../firebase'
import {signInWithPopup} from 'firebase/auth'
const login = ({setIsAuth}) => {
  const signInWithGoogle=(setIsAuth)=>
  {
        signInWithPopup(auth,provider).then((result)=>
        {
          localStorage.setItem("isAuth",true);
          setIsAuth(true);
        })
  }
  return (
    <div>
        <div className="loginPage">
          <p>Sign In With Google To Continue</p>
          <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>

    </div>
  )
}

export default login