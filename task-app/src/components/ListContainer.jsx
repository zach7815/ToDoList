import React from "react";
import ListItem from "./ListItem";
import ItemCount from './ItemCount';
import DesktopFilters from "./DesktopFilters";



const ListContainer = ({toDo,setToDo, setStatus, filteredTodos})=>{
    return(
        <div className="listContent">

        {filteredTodos.map(item=>{
            return(
                <ListItem
                key={item.id}
                id={item.id}
                itemText={item.text}
                checked={item.complete}
                toDo={item}
                toDos={toDo}
               setToDo={setToDo}
                />
            )
        })
        }
        <ItemCount/>

        <DesktopFilters toDo={toDo}
         setToDo={setToDo}
         setStatus={setStatus}
         filteredTodos={filteredTodos}
         />

        </div>
    )
}

export default ListContainer