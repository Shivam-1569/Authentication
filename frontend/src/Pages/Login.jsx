import React,{useState} from 'react'
import {Link} from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = (e)=>{
        e.preventDefault();
        console.log(email, password);
        
    }

  return (
    <div className='login_container'>
        <div className="login_box">
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter Email address..'/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type="submit" value="Login" />
                <h2>OR</h2>
                <Link to={'/signup'}>Sign Up</Link>
            </form>
        </div>
        
    </div>
  )
}

export default Login 