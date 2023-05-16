import React from 'react';
import './header.css';
import group from '../../assets/Group.png';

const Header = () => {
  return (
    <div className='lpg__header section__padding'>
      <div className="lpg__header-content">
          <h1>Introduce Your Product Quickly & Effectively</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
          <br />
          <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <div className='lpg__header-content_btn'>
          <button type="btn-ui">Purchase UI Kit</button>
          <button type="btn-ln">Learn More</button>
        </div>
      
      </div>
      <div className="lpg__header-image">
        <img src={group} alt="group" />
      </div>
    </div>
  )
}

export default Header