import React, { useState } from 'react';
import './navbar.css';
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'

const Menu = () => (
  <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#About">About</a></p>
    <p><a href="#Contact">Contact</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='lpg__navbar'>
      <div className='lpg__navbar-links'>
        <p><a href="#Home">Home</a></p>
        <p><a href="#About">About</a></p>
        <p><a href="#Contact">Contact</a></p>
      </div>
      <div className='lpg__navbar-logo'>
        <h1>Landing</h1>
      </div>
      <div className="lpg__navbar-btn">
        <button type="button">Buy Now</button>
      </div>

      <div className="lpg__navbar-menu">
        {toggleMenu 
        ? <RiCloseLine color='#111B47' size={27} onClick={() => setToggleMenu(false)} /> 
        : <RiMenu3Line color='#111B47' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="lpg__navbar-menu_container scale-up-center">
            <div className="lpg__navbar-menu_container_links">
              <Menu />
              <div className="lpg__navbar-menu_container-links-btn">
                <button type="button">Buy Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Navbar