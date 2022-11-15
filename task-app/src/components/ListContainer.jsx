import React from "react";
import ListItem from "./ListItem";
import ItemCount from './ItemCount';
import DesktopFilters from "./DesktopFilters";


const ListContainer = ()=>{
    return(
        <div className="listContent">

        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ItemCount/>
        <DesktopFilters/>
        </div>
    )
}

export default ListContainer