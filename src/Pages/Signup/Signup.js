import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
const Signup = () => {
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[ConfirmPassword,setConfirmPassword]=useState('')
  // const[error,setError]=useState(false)
const handleSubmit=(e)=>{
  e.preventDefault()
  if(password !==ConfirmPassword){
    alert('Password is not same')
  }
  else{
    if(name.length<=0 ||email.length<=0 || password.length<=0){
    alert('Enter all data')
    }
    else{
    localStorage.setItem('user',JSON.stringify({
      email,password,name
  }))
  // setError(false)
  setEmail('')
  setPassword('')
  navigate('/signin')
}
  }

}
  
  return (
    <div>
       <div className='signup'>
        <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
        alt="Logo"/></Link> 
        <div className="signupform">
          <form onSubmit={handleSubmit}>
          {/* {error ?  <p className='error-para'>"Email or password isn't entered!"</p>
              :null} */}
            <h1>Sign Up</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name'/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email/number" placeholder='Email or phone number'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' />
            <input value={ConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder='Confirm Password' />
            <button className="signupbtn">Register</button>
            <p>Already have an acount?<Link to="/signin">Sign In</Link></p>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Signup
