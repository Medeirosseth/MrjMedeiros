import React from 'react'
import './topBar.css'

export default function TopBar() {
  return (
    <div className='topBar'>
      <div className="imgContainer"> 
        <img className="topBarImg" src='assets/JasonWMic.png' alt="Jason with Mic"/>
      </div>
      <div className='navLink'>
        <div className="alltta">
          <img className="allttaImg" src='assets/ALLTTA.jpg' alt="ALLTTA logo"/>
        </div>
        <div className="procussions">
          <img className="procussionsImg" src='assets/Procussions.jpg' alt="Procussions Logo"/>
        </div>
        <div className="knives">
          <img className="knivesImg" src='assets/Knives.png' alt="Procussions Logo"/>
        </div>
      </div>
    </div>
  )
}
