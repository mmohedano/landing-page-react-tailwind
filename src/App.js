import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faCircleDot} from '@fortawesome/free-solid-svg-icons'
import {faApple} from '@fortawesome/free-brands-svg-icons'
import {faGooglePlay} from '@fortawesome/free-brands-svg-icons'

const Header = () =>{
  return (<>
  <div className="header__container">
     <div><FontAwesomeIcon icon={faCircleDot} size="xl" style={{color: "#5c797f",}} /></div>
     <div className="header__container-options"> 
       <span className="header__container-options-about">About </span>
       <span className="header__container-options-catalog">Catalog </span>
       <span className="header__container-options-contact">Contact </span>
       <span className="header__container-options-faq">FAQ </span>       
    </div>
    <div className="header__container_icons"> 
       <span className="header__container-icons-apple"><FontAwesomeIcon icon={faApple} size="lg" style={{color: "#5e7b80",}} /></span>
       <span className="header__container-icons-android"><FontAwesomeIcon icon={faGooglePlay} size="m" style={{color: "#617c84",}} /></span>
    </div>
  </div>
  </>)
}

const Body = () =>{
  return (<>
  <div className="body__container">
    <div className="body__container-left">
      <span className="body__container-left-text">
        <h4 className="body__container-left-text-heading">Each purchase will be made with pleasure!</h4>
        <p className="body__container-left-text-paragraph">We work with global brands and have created an application for you to do your shopping </p>
        <span> 
        <button className="body__container-left-button"> Start now </button>
      </span>
      </span>
      
      <span className="body__container-left-icons"> 
        <span><FontAwesomeIcon icon={faCircleArrowLeft} size="lg" style={{color: "#5c797f",}} /></span>
        <span><FontAwesomeIcon icon={faCircleArrowRight} size="lg" style={{color: "#5c797f",}} /></span>
    </span>
   
    </div>
    <div className="body__container-right">
      <img className="body__container-right-image" src="woman_shopping.png" alt="women shopping"/>
   </div>
 </div>
  </>)
}

export default function App() {
  return (<>
    <div className="app__container">
      <Header />
      <Body />

    </div>
    </> );
}
