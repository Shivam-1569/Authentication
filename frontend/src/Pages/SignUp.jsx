import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signupHandler = (e)=>{
        e.preventDefault();
        
        setEmail("")
        setName("")
        setPassword("")
    }

  return (
    <div className='signup_container'>
        <div className="signUp_box">
        <h2>Sign Up</h2>
        <form onSubmit={signupHandler}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name..'/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email address..'/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter the Password..' />
            <input type="submit" value="Sign Up" />
            <h2>OR</h2>
            <Link to={'/login'}>Login</Link>

        </form>
    </div>
    
</div>
  )
}

export default SignUp