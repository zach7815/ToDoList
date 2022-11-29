import './App.scss';
import React, {useState,useEffect} from 'react';
import Header from './components/Header';
import Attribution from './components/Attribution';
import ListContainer from './components/ListContainer';
import ToggleState from './components/ToggleState';



function App() {
  const [inputText, setInputText]=useState("");
  const [toDoList,setToDoList]= useState([]);
  const [status, setStatus]=useState("All")
  const [filteredTodos, setFilteredTodos]= useState([])






  useEffect(()=>{
    const filterHandler = ()=>{


      switch(status){

        case "Completed":
          setFilteredTodos(toDoList.filter(toDo=>toDo.complete===true))
          break


          case "Active":
            setFilteredTodos(toDoList.filter(toDo=>toDo.complete!==true))
            break

            case "Clear Completed":


                  break

          default:
            setFilteredTodos(toDoList)
          break
      }

    }
    filterHandler();
     }, [toDoList,status, setToDoList])

  return (
    <div className="App">
<Header inputText={inputText} setInputText={setInputText} data={toDoList} updateData={setToDoList}/>
<ListContainer toDo={toDoList} filteredTodos={filteredTodos} setToDo={setToDoList}  setStatus={setStatus}/>
<ToggleState   setStatus={setStatus}/>


<Attribution/>
    </div>
  );
}

export default App;
