import React, {useState} from 'react';
import {ReactComponent as ReactLogoMoon} from '../images/icon-moon.svg';
import {ReactComponent as ReactLogoSun} from '../images/icon-sun.svg';
import TaskInput from './TaskInput';
import useDarkMode from '../useDarkMode';



const Header = ()=>{
const [darkMode, setDarkMode]=useState(false)

useDarkMode(darkMode)

    return (
        <div className="header">
        <div className='heading'>
        <h1>to do</h1>
        <a href='null'
         className='.icon'
         onClick={(e)=>{
            e.preventDefault();
            darkMode === false ? setDarkMode(true) : setDarkMode(false)}}>
        {darkMode===false?<ReactLogoMoon/>:<ReactLogoSun/>}
        </a>
        </div>
            <TaskInput/>
        </div>
    )
}

export default Header