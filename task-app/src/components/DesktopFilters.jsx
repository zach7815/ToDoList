import React from "react";

const DesktopFilters=()=>{
    return(
        <div className="deskToggle">
        <span> 5 items left</span>
        <span className="filterBtn">All</span>
        <span className="filterBtn">Active</span>
        <span className="filterBtn">Completed</span>
        <span className="clearBtn">Clear Completed</span>
        </div>
    )
}

export default DesktopFilters