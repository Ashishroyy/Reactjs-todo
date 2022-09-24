import React from 'react';
import { useState ,useEffect} from 'react';
import Task from '../Task';

const Home = () => {   
const addTask = localStorage.getItem('tasks') ? 
JSON.parse(localStorage.getItem('tasks')): [];

    const [tasks,setTasks] = useState(addTask);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const submitHandler = (e)=>{
        e.preventDefault();
        setTasks([...tasks ,{title, description}])
        
    };
 // delete task
    const deleteTask = (index) => {
        const taskArr = tasks.filter((val, i) =>{
            return i !== index;
         })
         setTasks(taskArr)
    };
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);
    
  return (
    <>
        <div className='container'>
            <h1>Daily Goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Title' value = {title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea  id="desc" placeholder='Description' value ={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type='submit'>Add</button>
            </form>
            {tasks.map( (item, index) => (
                <Task key={index} title = {item.title} description = {item.description} deleteTask={deleteTask} index = {index}/>
            ))};
        </div>

    </>
  )
}

export default Home;