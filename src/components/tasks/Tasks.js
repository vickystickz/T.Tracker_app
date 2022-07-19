import React, {useState}from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {FaSearch, FaChevronDown, FaChevronUp} from 'react-icons/fa'
import {ReactComponent as Notes} from "../../Icon/Notes.svg"
import './tasks.css'

const Tasks = () => {
  const [toggleActive, setToggleActive] = useState(false);
  const [showTask, setShowTask] = useState()

  const Tasks_category = [
    { id: 1, text: "Recently"},
    { id: 2, text: "Today"  },
    { id: 3, text: "Upcoming" },
    { id: 4, text: "Later" },
  ];



  const myTask = [
    {
      id: 1,
      Name: "Medical Lp",
      Date: "25/2/2022",
      Time: "4pm",
      Description: "Make a landing page and mobile app",
      Progress: "20",
      backgroundColor: "#e6b800",
    },
    {
      id: 2,
      Name: "Finance App",
      Date: "2/2/2022",
      Time: "7pm",
      Description: "Branding and mobile app development",
      Progress: "60",
      backgroundColor: "black"
    },
    {
      id: 3,
      Name: "Finance App",
      Date: "2/2/2022",
      Time: "7pm",
      Description: "Branding and mobile app development",
      Progress: "100",
      backgroundColor: "#e6b800",
    }
  ]
  return (
    <div className='Tasks_Container'>
      <div className='User_tasks_info'>
        <h2>Hello, Victor!</h2>
        <div className='User_tasks_info_updates'>
          <h1>You've got 8 tasks today</h1><Notes className="icon"/>
        </div>
        <div className='User_tasks_search-bar'>
        <FaSearch className="search-icon"/><input className='search' placeholder='Search something....' />
        </div>
      </div>
      <div className='myTask_list_container'>
        <h1>My tasks</h1>
        <ul className='myTask_list_links'>
        {Tasks_category.map((Task_cat) => (
          <li onClick={() => setToggleActive(Task_cat.id)} className={toggleActive === Task_cat.id ? "activeList" : " "}>{Task_cat.text}</li>))} 
        </ul>
      </div>
      <div className='Tasks_showing_contents'>
      {myTask.map((task) => (
        <div className='Task_contents' style={{backgroundColor: task.backgroundColor, color:'white'}}>
          <div className='task-icon-settings'>
            {<h4>{task.Name}</h4>} 
            <div>
            <FaChevronDown />
            </div>
         </div>
          {<p>{task.Description}</p>}
          <Progress className='progress-bar' percent={task.Progress}
             status="sucess"
            theme={{
             sucess: {
               color: '#00e600'
                  }
              }}
        />
   
      </div>))}
      </div>
    </div>
  )
}

export default Tasks