import React, {useEffect,useState} from 'react';
import {ReactComponent as ReactLogo} from '../images/icon-moon.svg';




const Header = ()=>{
const [darkMode, setDarkMode]=useState(false);
useEffect(()=>{
    const body = document.body
    const bgImage = document.querySelector('.header')

    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if( darkMode === true ) {
      body.classList.add('light')
    //   bgImage.style.backgroundImage="url('./images/bg-desktop-dark.jpg')"
    } else {
      body.classList.remove('light')
    //   bgImage.style.backgroundImage="url('./images/bg-desktop-light.jpg')"
    }

}, [darkMode])

    return (
        <div className="header">
        <div className='heading'>
        <h1>to do</h1>
        <a href='null'
         className='.icon'
         onClick={(e)=>{
            e.preventDefault();
            darkMode === false ? setDarkMode(true) : setDarkMode(false)
            }}
         >
        <ReactLogo/>
        </a>
        </div>
        <div className='inputWrap'>
        < input type="text" placeholder="Create a new todo..." maxLength="50"/>

        <span className="innerCircle"></span>
        </div>
        </div>
    )
}

export default Header