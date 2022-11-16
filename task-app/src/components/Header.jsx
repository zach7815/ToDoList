import React, {useEffect,useState} from 'react';
import {ReactComponent as ReactLogo} from '../images/icon-moon.svg';




const Header = ()=>{
const [darkMode, setDarkMode]=useState(true);
useEffect(()=>{
    const body = document.body
    const items=document.querySelectorAll(".item");
    const deskToggle= document.querySelector(".deskToggle");
    const input= document.querySelector("input.itemInput");
    const itemCount =document.querySelector(".itemCount");
    const toggle =document.querySelector(".Toggles");
    const attribute=document.querySelector(".attribution");
    const bgImage = document.querySelector('.header');

    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if( darkMode === true ) {
      body.classList.add('darkModeBody')
      deskToggle.classList.add("darkmodeContent");
      itemCount.classList.add("darkmodeContent");
      toggle.classList.add("toggleDark");
      input.classList.add("darkmodeInput");
      bgImage.classList.add("darkmodeImage");
      attribute.classList.add("toggleDark");


      items.forEach(element => {
        element.classList.add("darkmodeContent");
      });

    //   bgImage.style.backgroundImage="url('./images/bg-desktop-dark.jpg')"
    } else {
      body.classList.remove('darkModeBody');
      input.classList.remove("darkmodeInput");
      deskToggle.classList.remove("darkmodeContent");
      input.classList.remove("darkmodeContent");
      itemCount.classList.remove("darkmodeContent");
      toggle.classList.remove("toggleDark");
      attribute.classList.remove("toggleDark");

      items.forEach(element => {
        element.classList.remove("darkmodeContent");
      });
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
        <input className='itemInput' type="text" placeholder="Create a new todo..." maxLength="50"/>

        <span className="innerCircle"></span>
        </div>
        </div>
    )
}

export default Header