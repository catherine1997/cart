import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './Navbar.css'
import imgAma from '../backend/images/Amala.jpeg';
// import AddForm from './AddForm';


import ModalParent from './ModalParent';
import LoginModal from './LoginModal/LoginModal';



function Navbar() {
const [toggle, setToggle] = useState(false)
const [openLoginModal, setOpenLoginModal] = useState(false)
 
  return (
    <div>
    

<header>
  {/* <a href='#'><img className='logo' src={imgAma} alt='Logo'/></a> */}
   
    <a href='#' className='logo'> CathyB</a>
    <input type='checkbox 'id='check'/>
    <span className='menu' onClick={() => setToggle(!toggle)}>
    <i class="fa-solid fa-bars"></i>
    </span>
   
  <nav className='nav-links'>
    <ul  className={`${toggle ? 'active' : 'nav-bar'}`}>
      <li><a href='/'>Home</a></li>
      <li><a href='#'>Food</a></li>
      <li><a href='#'>Services</a></li>
      <li><a href='#'>About</a></li>

    
    </ul>
  </nav>
  
 <a><Button className='button' onClick={() => setOpenLoginModal(true)}>Sign Up</Button></a> 
</header>



{/* custom modal */}
{openLoginModal && <ModalParent>
  <LoginModal setOpenLoginModal={setOpenLoginModal}></LoginModal>
  {/* <AddForm /> */}
</ModalParent>}
    </div>
  )
}

export default Navbar;