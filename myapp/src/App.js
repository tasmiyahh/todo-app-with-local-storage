
import React, { useEffect, useState } from 'react';

import './App.css';


function App() {
 const [data,setData]=useState("add some task")
 const [task , setTask] = useState(JSON.parse(localStorage.getItem("list")) || [])


 useEffect(()=>{
  localStorage.setItem("list", JSON.stringify(data))
 },[data])

const submithandler =(event)=>{
  event.preventDefault()
  console.log("added")
  setTask([...task, data])

  
}

const deletetodo=(Index)=>{
  const finaldata =task.filter((currentelement,index)=>{
  return index !== Index;
  })
  setTask(finaldata)
  }
  

useEffect(()=>{
  localStorage.setItem("list" , JSON.stringify(task))
},[task])





 

  return (
    <div className="app">

 
       <form onSubmit={submithandler}>
       <input type="text" value={data}
                onChange={(e)=>{
                    setData(e.target.value)
                }}
              required id='todo' />
              <button type='submit' >Add</button>
             <input type="reset" value="reset" />
       </form>
             <p id='list'>
             {
              task.map((eachvalue,index)=>{
              return(
              <div key={index}>
                <p>
              {eachvalue}
             
                </p>
                <p>
                <button onClick={()=>deletetodo(index)}> delete</button>
                </p>
              
               
              </div>
              )
              
              
               
              })
             }
             </p>
             </div>
  );
}

export default App;
