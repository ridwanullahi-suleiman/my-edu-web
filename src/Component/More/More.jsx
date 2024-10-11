import React from 'react'
import './More.css'
import { useRef } from 'react';

const  More = () =>{
    const menuRef = useRef ();
    const tittle = useRef ()
  const hideMenu =() =>{
   menuRef.current.style.display = 'none'

  }
  const closeMenu =() =>{
    tittle.current.style.display = 'none'
 
   }
  const showMenu = () =>{
   menuRef.current.style.display ="block"

  }
  const openMenu = () =>{
    tittle.current.style.display ="block"
 
   }

  return (
    
    <div className="contss">
   
    <div className="faqs">
        <article className="faq">
          <div onClick={showMenu} className='faq-icon'> <i class="fa fa-plus"></i>How do i know the right course</div>
          <div ref={menuRef} className='faq-question'>
             <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>
             <span onClick={hideMenu}>&times;</span>

          </div>
        </article>
        <article className="faq">
        <div onClick={openMenu} className='faq-icon'> <i class="fa fa-plus"></i>How do i know the right course</div>
        <div ref={tittle} className='faq-question'>
           <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>
           <span onClick={closeMenu}>&times;</span>

        </div>
      </article>
      
         <article className='faq'>
          <div className='faq-icon'><i class="fa fa-plus"></i></div>
          <div className='faq-question'>
             <h4>How do i know the right course for me?</h4>
             <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>
          </div>
        </article>
         <article className='faq'>
          <div className='faq-icon'><i class="fa fa-plus"></i></div>
          <div className='faq-question'>
             <h4>How do i know the right course for me?</h4>
             <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>
          </div>
        </article>
        <article className='faq'>
        <div className='faq-icon'><i class="fa fa-plus"></i></div>
        <div className='faq-question'>
           <h4>How do i know the right course for me?</h4>
           <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>
        </div>
      </article>
       <article className='faq'>
          <div className='faq-icon'><i class="fa fa-plus"></i></div>
          <div className='faq-question'>
             <h4>How do i know the right course for me?</h4>
             <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>
          </div>
        </article>
    </div>
    </div>
  )
}

export default More