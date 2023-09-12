import React from 'react'

export const ShowTask = ({taskList,setTaskList,tasks,updateTaskList }) => {

    const handleUpdate = (id) =>{
        const selectedTask=taskList.find(todo=>todo.id===id);
        updateTaskList(selectedTask);

    }

    const handleDelete = (id) =>{
        const UpdatedList=taskList.filter(todo => todo.id!=id);
        setTaskList(UpdatedList);
    }

   

  return (
    <section className="showTask">
    <div className="head">
        <div>
        <span className="title">To-Do</span>
        <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={ () => setTaskList([]) } >Clear All</button>
    </div>
    <ul>
       { taskList.map((task) => (
              <li key={task.id} id="listA">
              <p>
                <div className="name"> <span > {task.name}  </span></div>
                 <div className="time"><span > {task.time}</span></div>
                  
              </p>
              <i onClick={()=> handleUpdate(task.id)} className='bi bi-pencil-square'></i>
              <i  onClick={()=> handleDelete(task.id)} className='bi bi-trash'></i>
          </li>
        ))}
        
    </ul>


    </section>
  )
}
