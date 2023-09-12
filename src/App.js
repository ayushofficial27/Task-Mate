import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import {ShowTask}  from './components/ShowTask';
import './App.css';



function App() {
const [taskList,setTaskList]=useState(JSON.parse(localStorage.getItem("taskList")) || []);
const [tasks,updateTaskList]=useState({});
const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "medium");
useEffect( ()=> 
{localStorage.setItem("taskList" , JSON.stringify(taskList));
} ,
[taskList]

)
useEffect(() => {
  localStorage.setItem('theme', JSON.stringify(theme));
  document.documentElement.removeAttribute("class");
document.documentElement.classList.add(theme);
}, [theme]);

  return (
    <div className="App">
    <Header setTheme={setTheme} theme={theme}/>
    <AddTask  taskList={taskList} setTaskList={setTaskList}  tasks={tasks} updateTaskList={updateTaskList} />
    <ShowTask taskList={taskList} setTaskList={setTaskList} tasks={tasks} updateTaskList={updateTaskList} /> 
    <Footer/>
    </div>
  );
}

export default App;
