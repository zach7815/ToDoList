import React from 'react';

const TaskInput= ({inputText, setInputText, newItem, setNewItem})=>{

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
        <form   onSubmit={handleSubmit} className='inputWrap'>
        <input
         className='itemInput'
         value={inputText}
         onChange={inputTextHandler}
          type="text"
          placeholder="Create a new todo..."
          maxLength="50"/>
        </form>
    )
}

export default TaskInput;