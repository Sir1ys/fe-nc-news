import React from 'react'

export default function SignIn() {
  return (
    <form className='form-signIn'> 
        <h2>Already have an account ?</h2>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" placeholder='Enter your username' />
        <button>Sign In</button>
    </form>
  )
}
