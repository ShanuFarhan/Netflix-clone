import React, { useState } from 'react'
import "./Signin.css"
import {Link, useNavigate} from 'react-router-dom'
const SignIn = () => {
  const navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    const user=JSON.parse(localStorage.getItem('user'))
        if(user && user.email===email && user.password===password){
          // props.setIslogged(true)
            setEmail('')
            setPassword('')
            navigate("/")
        }
        else{
          alert('Incorrect email or password')
        }
  }
  return (
    <div className='signin'>
        <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
        alt="Logo"/></Link> 
        <div className="signinform">
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='email' type="email/number" placeholder='Email or phone number'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='pass' type="password" placeholder='Password' />
            <button className="signinbtn">Sign In</button>
            <p>New to Netflix?<Link to="/signup">Sign up now </Link></p>
            </form>
        </div>
    </div>
  )
}

export default SignIn

