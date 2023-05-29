import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import { Button } from 'react-bootstrap'

const GoogleLogin = ({buttonText}) => {

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log("dah ada tokennya")
            console.log(tokenResponse)
        }
    })

  return (
    <Button variant='primary' onClick={() => login()}>
        {buttonText}
    </Button>
   )
}
 
export default GoogleLogin