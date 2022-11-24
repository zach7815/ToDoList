import React, { useState } from "react";
import ListItem from "./ListItem";
import ItemCount from './ItemCount';
import DesktopFilters from "./DesktopFilters";
import data from "../data.json"


const ListContainer = ()=>{
const [toDoList,setToDoList]= useState(data);
    return(
        <div className="listContent">
        {toDoList.map(item=>{
            return(
                <ListItem key={item.id} itemText={item.task} checked={item.complete} />
            )
        })

        }
        <ItemCount/>
        <DesktopFilters/>
        </div>
    )
}

export default ListContainer