
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[inputText,setInputText] = useState("")
  const[todoList,setTodoList] = useState([])
 

  function addItem(){
    if(inputText !== ""){
      setTodoList([...todoList,inputText])
      setInputText(" ")
    }

  }

  function deleteItem(index){
    let tempArr = [...todoList]
    tempArr.splice(index,1)
    setTodoList([...tempArr])

  }



  return (
    <div className="mainContainer">
      <div className="inputContainer">
        <h1>To-Do List</h1>
        <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
        <button onClick={addItem}>Add Todo</button>

        <div className="listContainer">
          <ul>
            {
              todoList.map((item,index)=>(
                <li key={index} id="index">
                  <h3>{item}</h3>
                  <button onClick={deleteItem}>Delete</button>
                </li>

              ))
            }
          </ul>

        </div>


      </div>
        
    </div>
  )
}

export default App
