import React from 'react';

const TaskInput= ({inputText, setInputText, newItem, setNewItem, darkMode})=>{

 const inputTextHandler = (e)=>{
    setInputText(e.target.value);
 }

const handleSubmit= (e)=>{


    e.preventDefault()
    setNewItem([...newItem,
        {
            id:Math.random()*1000,
            text:inputText,
            complete:false
        }
    ])
    setInputText('')
}


    return (
        <form   onSubmit={handleSubmit} className="inputWrap">
        {/* <label className="inputWrap"> write a task */}
        <input
         className={`itemInput ${darkMode===true?'darkmodeContent':'lightmodeContent'}`}
         value={inputText}
         onChange={inputTextHandler}
          type="text"
          placeholder="Create a new todo..."
          maxLength="50"
            label="write a "
          />
          {/* </label> */}
        </form>
    )
}

export default TaskInput;