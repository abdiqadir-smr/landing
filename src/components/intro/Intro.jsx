import React from 'react';
import './intro.css';

const Intro = ({imgUrl,title,text1,text2,btn}) => {
  return (
    <div className='lpg__intro section__padding'>
      <div className="lpg__intro-image">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="lpg__intro-content">
        <h1>{title}</h1>
        <p>{text1}</p>
        <br/>
        <p>{text2}</p>
      </div>
    </div>
  )
}

export default Intro