import React, {useEffect,useState} from 'react';
import {ReactComponent as ReactLogoMoon} from '../images/icon-moon.svg';
import {ReactComponent as ReactLogoSun} from '../images/icon-sun.svg';




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
      attribute.classList.add("toggleDark");
      bgImage.style.backgroundImage=`url('http://localhost:3000/static/media/bg-desktop-dark.73e47dbb723ebc772ef0.jpg')`



      items.forEach(element => {
        element.classList.add("darkmodeContent");
      });

    } else {
      body.classList.remove('darkModeBody');
      input.classList.remove("darkmodeInput");
      deskToggle.classList.remove("darkmodeContent");
      input.classList.remove("darkmodeContent");
      itemCount.classList.remove("darkmodeContent");
      toggle.classList.remove("toggleDark");
      attribute.classList.remove("toggleDark");
      bgImage.style.backgroundImage=`url('http://localhost:3000/static/media/bg-desktop-light.3508d620efd5a52bb4ce.jpg')`;
      items.forEach(element => {
        element.classList.remove("darkmodeContent");
      });

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
        <ReactLogoMoon/>
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