import React from 'react'
import videoBg from "../assets/particlesBg.mp4"



const Main = () => {
  return (

    <div className='main'>
            <div className='overlay'></div>
          <h1 className="title">
            <span className="gradient-text-0">
                PylonDEX
            </span>
          </h1>
        <div className='WidgetPage'>
          <div>
          
          </div>
        </div>
      <video src={videoBg} autoPlay loop muted />

    </div>
  )
}

export default Main