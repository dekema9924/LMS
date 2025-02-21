import React from 'react'
import whitelogo from '../../assets/images/whitelogo.png'
import blacklogo from '../../assets/images/blacklogo.png'

function Login() {
  return (
     <>
        <div>
            <div>
                <img src={blacklogo} alt="logo" />
                <h1>Welcome</h1>
                <p>Enter your credentials to log in</p>

                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <p>Forgot password?</p>
                    <button>Login</button>
                </form>


            </div>
        </div>
     
     </>
  )
}

export default Login
