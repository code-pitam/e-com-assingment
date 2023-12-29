import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h1>Login</h1>
        <form action="">
          <div className="username">
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="username">
            <label htmlFor="username">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button className='button' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login