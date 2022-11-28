import React from "react";
import ListItem from "./ListItem";
import ItemCount from './ItemCount';
import DesktopFilters from "./DesktopFilters";



const ListContainer = ({toDo,setToDo})=>{
    console.log(toDo)
    return(
        <div className="listContent">

        {toDo.map(item=>{
            return(
                <ListItem
                key={item.id}
                id={item.id}
                itemText={item.text}
                checked={item.complete}
                toDo={item}
                toDos={toDo}
               setToDo={setToDo} />
            )
        })
        }
        <ItemCount/>
        {toDo.length===0?"":<DesktopFilters toDo={toDo}/>}

        </div>
    )
}

export default ListContainer