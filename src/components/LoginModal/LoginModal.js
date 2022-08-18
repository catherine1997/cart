import React from 'react'
import AddForm from '../AddForm'
import styles from './LoginModal.module.css'

const LoginModal = ({setOpenLoginModal}) => {
  return (
    <div className={styles.loginModal}>
        
        <div className={styles.closeModal} onClick={() => setOpenLoginModal(false)}>X</div>
        <form>
        <h1>Sign Up</h1>
             <label for="fname">Username:</label>
             <input type="text" id="fname" name="firstname" placeholder="Username"/>

            <label for="lname">Email:</label>
             <input type="text" id="lname" name="lastname" placeholder="Email"/>

             <label for="lname">Password:</label>
             <input type="text" id="lname" name="lastname" placeholder="Password" required/>
              <input type="submit" value="Submit"/>
         </form>

    </div>
  )
}

export default LoginModal