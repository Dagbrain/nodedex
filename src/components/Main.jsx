import React from 'react'
import videoBg from "../assets/particlesBg.mp4"
import { WidgetPage } from '../widgetpage'
import '../App.css';


const Main = () => {
  return (

    <div className='main'>
            <div className='overlay'></div>
          <div>
          <h1 className="title">
            <span className="gradient-text-0">
                PylonDEX
            </span>
          </h1>
          </div>
        <div className='WidgetPage'>
          <div>
          <WidgetPage />
          </div>
        </div>
      <video src={videoBg} autoPlay loop muted />

    </div>
  )
}

export default Main