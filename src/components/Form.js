import React from 'react';
import './Form.css'

function Form() {
  return (
    <div className='container'>
        <form>
            <p>Welcome</p>
            <input type='email' placeholder='email' /> <br/>
            <input type='password' placeholder='placeholder' /> <br/>
            <input type='button' value='Sign in' /> <br/>

            <a href='#'> Forget Password</a>
        </form>
    </div>
  )
}

export default Form