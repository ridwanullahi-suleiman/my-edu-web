import React from 'react'
import './Hero.css'
import student1 from '../../assets/african-american.jpg'
import student from '../../assets/STUDENT.png'

function Hero() {
  return (
    <section id='about'>
    <div className='hero'>
        <div className='hero-container'>
             <div className='heroleft'>
                  <div><h1>Grown Your Skills To Advance Your Carrer Path</h1>
                  <p>The word 'lorem', for example, isn't a real Latin word, it's a shortened version of the word 'dolorem', meaning pain.</p>
                  <button type='submit'>Submit</button></div>
             </div>
             <div className='heroleft'>
               <img src={student}/>
             </div>
        </div>

    </div>
    <section className='category'>
    <div className='cat-box'>
        <div className='leftcat'>
          <h2>Categories</h2>
          <p>The word 'lorem', for example, isn't a real Latin word, it's a shortened version of the word 'dolorem', meaning pain.it's a shortened version of the word 'dolorem', meaning pain. meaning pain.it's a shortened version of the word 'dolorem', meaning pain</p>
          <button>Learn more</button>
          
        </div>
        <div className='right-side'>
           <div className='right-container'>
               <div className='card'>
                   <i class="fa fa-chain"></i>
                   <h3>Block Chain</h3>
                   <p>The word lorem for example, isn't a real Latin word .</p>
               </div>
               <div className='card'>
               <i class="fa fa-soccer-ball-o"></i>
               <h3>Graphic DEsign</h3>
               <p>The word lorem for example, isn't a real Latin word .</p>
           </div>
            <div className='card'>
                  <i class="fa fa-file"></i>
                   <h3>Finance</h3>
                   <p>The word lorem for example, isn't a real Latin word .</p>
               </div>
               <div className='card'>
               <i class="fa fa-music"></i>
               <h3>music</h3>
               <p>The word lorem for example, isn't a real Latin word .</p>
           </div>
            <div className='card'>
                   <i class="fa fa-phone"></i>
                   <h3>Shopify</h3>
                   <p>The word lorem for example, isn't a real Latin word .</p>
               </div>
                <div className='card'>
                   <i class="fa fa-chain"></i>
                   <h3>Block Chain</h3>
                   <p>The word lorem for example, isn't a real Latin word .</p>
               </div>
           </div>
        </div>
    </div>
 
 </section>
 </section>
    
  )
}

export default Hero