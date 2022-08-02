import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div>
        <footer class="footer-distributed">

<div class="footer-left">

    <h3>About<span>CathyB</span></h3>

    <p class="footer-links">
        <a href="#">Home</a>
        |
        <a href="#">Blog</a>
        |
        <a href="#">About</a>
        |
        <a href="#">Contact</a>
    </p>

    <p class="footer-company-name">© 2022 CathyB Learning Solutions Pvt. Ltd.</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"></i>
          <p><span>309 - Rupa Solitaire,
             Bldg. No. A - 1, Sector - 1</span>
            Minna, Nigeria - 400710</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+234 08095799350</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@eduonix.com">support@cathbaha1@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>About the company</span>
        We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
    <div class="footer-icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a>
    </div>
</div>
</footer>
    </div>
  )
}

export default Footer;