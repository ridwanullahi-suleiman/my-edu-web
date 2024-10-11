import React from 'react'
import './Course.css'
import offer from '../../assets/graphic-design.webp'
import offer2 from '../../assets/grpa.jpg'
import offer3 from '../../assets/images (5).jpeg'
function Course() {
  return (
    <div id='course' className='course'>
         <div className='course-container'>
              <div className='offer'>
                   <img style={{maxWidth:'330px'}}  src={offer}/>
                   <h3>Responsive Social Media Website UI  <br/>Design</h3>
                   <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>
                   <button>Learn More</button>
              </div>
               <div className='offer'>
                   <img style={{maxWidth:'330px'}}  src={offer2}/>
                   <h3>Responsive Social Media Website UI  <br/>Design</h3>
                   <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>
                   <button>Learn More</button>
              </div>
               <div className='offer'>
          
                   <img style={{maxWidth:'fit-content'}} src={offer3}/>
                   <h3>Responsive Social Media Website UI  <br/>Design</h3>
                   <p>Lorem,ipsum color sit annet consecteture elit. Nescic <br/>utexperience seserunt eaque quos lure and debitis</p>
                   <button>Learn More</button>
              </div>
         </div>
    </div>
  )
}

export default Course