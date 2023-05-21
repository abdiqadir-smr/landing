import React from 'react';
import './cta.css'

const Cta = ({imgUrl,title,text1,text2,btn}) => {
  return (
    <div className='lpg__cta section__padding'>
      <div className="lpg__cta-image">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="lpg__cta-content">
        <h1>{title}</h1>
        <p>{text1}</p>
        <br/>
        <p>{text2}</p>
        <button className='lpg__cta-content-btn' type="button">{btn}</button>
      </div>
    </div>
  )
}

export default Cta