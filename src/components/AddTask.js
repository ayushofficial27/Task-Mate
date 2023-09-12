import React from 'react'

export const AddTask = ({taskList,setTaskList,tasks,updateTaskList }) => {

    const handleForm = (e) =>{
          e.preventDefault();
         
          if(tasks.id){
            const date=new Date();
            const newList=taskList.map(todo=>(
                todo.id===tasks.id?{ id:tasks.id,name:tasks.name ,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:todo
                )); 
            setTaskList(newList);
          }
         else{

            const date=new Date();
            const newTask ={
              id: date.getTime(),
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            console.log(date);
            setTaskList([...taskList,newTask]);
         }
         updateTaskList({});


    }

  return (
    <section className="addTask">
        <form onSubmit={handleForm} >
          <input type="text" placeholder='Add-Task' value={tasks.name || ""} name='task' autoComplete='off'  onChange={(e)=> {updateTaskList({...tasks, name: e.target.value})}}/>
          <button type='submit'>{tasks.id?"Update": "ADD"}</button>
        </form>
    </section>
  )
}
