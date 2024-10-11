import { useRef } from 'react'
import './Header.css'
function Header() {
  window.addEventListener('scroll', () =>{
    document.querySelector("Nav").classList.toggle("window-scroll",window.scrollY >0)
  })
  const menuRef = useRef ('');
  const showMenu =() =>{
   menuRef.current.style.right = "0"
  }
  const hideMenu = () =>{
   menuRef.current.style.right ="-300px"
  }
  return (
    <nav className='Navigation'>
      <h2>EGATOR</h2>
      <ul ref={menuRef} className='Links'>
      <span onClick={hideMenu}>&times;</span>
        <li>
        <a href='#home'>Home</a>
        </li>
        <li>
        <a href='#about'>About</a>
        </li>
        <li>
        <a href='#course'>Cources</a>
        </li>
        <li>
        <a href=''>Testimony</a>
        </li>
        <li>
        <a href=''>Contact</a>
        </li>
      </ul>
      <span onClick={showMenu}>&#9776;</span>
    </nav>
  )
}

export default Header