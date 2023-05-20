import React from 'react';
import './undraw.css';
import undraw from '../../assets/undraw_mobile.png';
import Feature from '../../components/feature/Feature';
import Icon_Img from '../../assets/Icon_Img.png';

const Undraw = () => {
  return (
    <div className='lpg__undraw section__padding'>
      <div className="lpg__undraw-content">
        <div className="lpg__undraw-content-head">
          <h1>Light, Fast & Powerful</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br />
          <br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </div>
        <div className="lpg__undraw-content-icons">
          <Feature iconUrl={Icon_Img} title={"Title Goes Here"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."} />
          <Feature iconUrl={Icon_Img} title={"Title Goes Here"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."} />
        </div>
      </div>
      <div className="lpg__udraw-image">
        <img src={undraw} alt="undraw" />
      </div>
    </div>
  )
}

export default Undraw