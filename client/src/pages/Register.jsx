import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'




const Register = () => {

const[userData, setUserData] = useState({
  name :'',
  email :'',
  password : '',
  password2 : ''

})
const [error, setError] = useState('')
const navigate = useNavigate()

const changeInputHandler = (e) => {
  setUserData(prevState => {
    return {...prevState, [e.target.name] : e.target.value}
  })


}
const registerUser = async(e) => {
  e.preventDefault()
  setError('')
  try {
    console.log(process.env.REACT_APP_BASE_URL)
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData)
    const newUser = await response.data;
    console.log(newUser);
    if(!newUser) {
      setError("Couldn't register user. Please try again.")
    }
    navigate('/login')
  } catch (err) {
    setError(err.response.data.message)
    
  }
}

  return (
    <section className="register">
      <div className="container">
        <h2>Sign up</h2>
        <form class="form register__form" onSubmit={registerUser}>
        {error &&   <p className="form__error-message">{error}</p>}
          <input type="text" placeholder='Full name' name="name" value={userData.name} onChange={changeInputHandler}/>
          <input type="text" placeholder='Email' name="email" value={userData.email} onChange={changeInputHandler}/>
          <input type="password" placeholder='Password' name="password" value={userData.password} onChange={changeInputHandler}/>
          <input type="password" placeholder='Confirm Password' name="password2" value={userData.password2} onChange={changeInputHandler}/>
<button className="btn primary"type="submit">Register</button>
        </form>
        <small>Already have an account ? <Link to="/login">sign in</Link></small>
      </div>
    </section>
  )
}

export default Register