import React from 'react'
import './Footer.css'
function Footer() {
  return (
    
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-flex'>
             <article className='footer-line'>
                <h3>EGATOR</h3>
                <p>Lorem,ipsum color sit annet consecteture elit. Nescic utexperience seserunt eaque quos lure and debitis</p>
             </article>
             <article className='footer-links'>
              <h3>Permalinks</h3>
               <ul>
                  <li><a href=''>Home</a></li>
                  <li><a href=''>About</a></li>
                  <li><a href=''>Courses</a></li>
                  <li><a href=''>Testimony</a></li>
                  <li><a href=''>Contact</a></li>
               </ul>
             </article>
             <article className='footer-links'>
             <h3>Primacy</h3>
              <ul>
                 <li><a href=''>Privacy Policy</a></li>
                 <li><a href=''>Term and Condition</a></li>
                 <li><a href=''>Refund Policy</a></li>
                 <li><a href=''>Testimony</a></li>
              </ul>
            </article>
            <article className='footer-contact'>
               <h3>Contact Us</h3>
                <span>
               <small>+234 0000000000</small>
                <p>just@gmail.com</p>
                <span className='contant-span'>
                <i class='fa fa-facebook'></i>
                <i class='fa fa-whatsapp'></i>
                <i class='fa fa-instagram'></i>
                <i class='fa fa-twitter'></i>
                </span>
                </span>
            </article>
        </div>
      
      </div>
    
    </div>
  )
}

export default Footer