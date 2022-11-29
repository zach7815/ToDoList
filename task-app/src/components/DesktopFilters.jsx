import React from "react";

const DesktopFilters=({toDo, setToDo, setStatus})=>{


    const filterList = (e)=>{
        const filter =e.target.innerText;
        switch(filter){
            case "Completed":
                setStatus("Completed")
                break

                case "Active":
                setStatus("Active")
                break

                case "Clear Completed":
                setStatus("Clear Completed")
                break

                default:
                    setStatus("All")
                    break
        }

    }

    const clearCompleted= ()=>{
        setToDo(toDo.filter(item=> item.complete===false))
    }


    return(
        <div className="deskToggle item">
        {toDo.length===1?<span> 1 item left</span>:
        <span> {toDo.length} items left</span>}
        <span className="filterBtn"
        onClick={filterList}
        >All</span>
        <span className="filterBtn"
        onClick={filterList}
        >
        Active</span>
        <span className="filterBtn"
        onClick={filterList}>
        Completed
        </span>
        <span className="clearBtn"
        onClick={clearCompleted}
        >Clear Completed</span>
        </div>
    )
}

export default DesktopFilters