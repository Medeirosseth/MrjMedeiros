import React from 'react'
import './timeline.css'

export default function Timeline() {
  return (
    <div className='timeline'>
      <div className="timelineContainer">
        <div className="albumContainer"> 
          <img 
            className='UAN albumCover'
            src="assets/timeline/procussions2004.jpg" 
            alt="Up All Night Cover"/>
        </div>
        <div className="albumContainer"> 
          <img 
            className='OFAG albumCover'
            src="assets/timeline/MJM2007.jpg" 
            alt="As Iron Sharpens Iron Cover"/>
        </div>
        <div className="albumContainer"> 
          <img 
            className='PBD albumCover'
            src="assets/timeline/MJM2012.jpg" 
            alt="As Iron Sharpens Iron Cover"/>
        </div>
      </div>
    </div>
  )
}
