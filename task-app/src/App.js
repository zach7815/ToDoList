import './App.scss';
import React, {useState} from 'react';
import Header from './components/Header';
import Attribution from './components/Attribution';
import ListContainer from './components/ListContainer';
import ToggleState from './components/ToggleState';
import data from "./data.json"


function App() {
  const [inputText, setInputText]=useState("");
  const [toDoList,setToDoList]= useState([]);

  return (
    <div className="App">
<Header inputText={inputText} setInputText={setInputText} data={toDoList} updateData={setToDoList}/>
<ListContainer toDo={toDoList} updateTodo={setToDoList}/>
<ToggleState/>


<Attribution/>
    </div>
  );
}

export default App;
