import React from 'react';
import sunIcon from '../images/icon-sun.svg'


const Header = ()=>{
    return (
        <div className="header">
        <div className='heading'>
        <h1>to do</h1>
        <img className='icon' src={sunIcon} alt="toggle moon/darkmode"/>
        </div>
        <div className='inputWrap'>
        < input type="text" placeholder="Create a new todo..." maxLength="50"/>
        <span className="innerCircle"></span>
        </div>
        </div>
    )
}

export default Header