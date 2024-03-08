

import React from 'react';
import axios from 'axios';


function App() {

  const [task,setTasks]=React.useState([])
  React.useEffect(()=>
  {
    fetchData();
  },[task])

  const fetchData = async ()=>
  {
    try 
    {
    const response =await fetch('http://localhost:3001/data');
    const jsonData=await response.json()
    setTasks(jsonData)
    }catch(err)
    {
      console.log(err);
    }

  }
  const [singleTask,setsingleTask]=React.useState('')


  const handleAdd =()=>
  {
    axios.post('http://localhost:3001/add',{task: singleTask})
    setsingleTask('')
  }

  const handlekeydown=(event)=>
  {
    if(event.key==='Enter')
    {
      axios.post('http://localhost:3001/add',{task: singleTask})
      setsingleTask('')
    }
  }

  return (
    <>
     <p>To do list</p>
     <div style={{display:'flex',flexDirection:'row',gap:5}}>
        <input type="text" value={singleTask} placeholder='Enter the task' onChange={(e) => setsingleTask(e.target.value)} onKeyDown={handlekeydown}/>
        <button onClick={handleAdd}>Add</button>
     </div>
     <br />
     <div>
      {
        task.length === 0 ? <div>No records found</div> : 
        task.map(
          (item)=>(
            <div   style={{display:'flex',flexDirection:'column',backgroundColor:'black',color:'white',width:'300px',marginBottom:5,alignItems:'center'}}>
              <p>{item.task}</p>
            </div>
          )
        )
      }
     </div>
    </>
  )
}

export default App
