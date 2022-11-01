import React from "react";
import cross from "../images/icon-cross.svg"

const ListItem = () =>{
    return(
        <div className="item">
        <span className="innerCircle"></span>
        <p>Dummy to do item</p>
        <img className="cross" src={cross} alt="cross symbol for deletion of item"/>
        </div>
    )
}
export default ListItem