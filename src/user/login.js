import React, { useState } from 'react'
import Base from '../core/Base'
import { authenticate, isAuthenticted, login } from '../auth/helper'
import { Redirect } from 'react-router-dom'
const Login = () => {
  const [values, setvalues] = useState({    
    email: '',
    password: '',
    error: '',
    loading: false,
    didRedirect: false
  })
  const { email, password, error, loading, didRedirect } = values
  
  const handleChange = (key) => (event) => {
    setvalues({ ...values, error: false, [key]: event.target.value })
  }

  const onSubmit = (event) => {
    console.log(event)
    //This will stop you from moving to different page
    event.preventDefault()
    setvalues({ ...values, error: false, loading: true })        
    //Check by printing the data
    login({ email, password })
      .then((data) => {
        console.log(data)
        if (data.error) {
            setvalues({ ...values, error: data.error, loading: false })
        } else {
            authenticate(data, ()=>{
                setvalues({
                    ...values,            
                    didRedirect : true
                })
            })          
        }
      })
      .catch(console.log('Error in login'))
  }
  const loginForm = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <form>           
            <div className='form-group'>
              <label>Email</label>
              <input
                className='form-control'
                onChange={handleChange('email')}
                type='email'
                value={email}
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                className='form-control'
                onChange={handleChange('password')}
                type='password'
                value={password}
              />
            </div>
            <button onClick={onSubmit} className='btn btn-success btn-block'>
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  const performRedirect = () => {    
    if (isAuthenticted()) {
      return <Redirect to='/' />
    }
  }
  
  const loadingMessage = () => {
    return (
      loading && (
        <div className='alert alert-info'>
          <h2>Loading...</h2>
        </div>
      )
    )
  }


  const errorMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div
            className='alert alert-danger'
            style={{ display: error ? '' : 'none' }}
          >
            {error}
          </div>
        </div>
      </div>
    )
  }
  return (
    <Base title='Sign Up page' description='A page for user signup!'>
      {loadingMessage()}
      {errorMessage()}
      {loginForm()}
      {performRedirect()}
      {/* <p className='text-white text-center'>{JSON.stringify(values)}</p> */}
    </Base>
  )
}

export default Login
