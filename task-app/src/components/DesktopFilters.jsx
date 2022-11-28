import React from "react";

const DesktopFilters=({toDo})=>{
    return(
        <div className="deskToggle item">
        {toDo.length===1?<span> 1 item left</span>:
        <span> {toDo.length} items left</span>}
        <span className="filterBtn">All</span>
        <span className="filterBtn">Active</span>
        <span className="filterBtn">Completed</span>
        <span className="clearBtn">Clear Completed</span>
        </div>
    )
}

export default DesktopFilters