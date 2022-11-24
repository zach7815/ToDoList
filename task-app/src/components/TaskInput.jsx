import React, {useState} from 'react';

const TaskInput= ()=>{
    const [item, setItem]=useState([]);

const handleSubmit= (event)=>{
    const form =document.querySelector(".inputWrap");
    event.preventDefault()
    setItem((event)=>{

        const items=[];
        items.push()
    })
    alert(item)
    form.reset()
}
console.log(item)

    return (
        <form onSubmit={handleSubmit} className='inputWrap'>
        <input
         className='itemInput'
         onChange={event=>setItem(event.target.value)}
          type="text"
          placeholder="Create a new todo..."
          maxLength="50"/>
        </form>
    )
}

export default TaskInput;