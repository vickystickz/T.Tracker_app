import { useState} from 'react'
import { FaGripHorizontal, FaChartPie, FaUsers, FaFile, FaTools, FaAngleDown } from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navLinks = [
    { id: 1, text: "Dashboard", icon: "FaGripHorizontal" },
    { id: 2, text: "Analytics"  },
    { id: 3, text: "Teams" },
    { id: 4, text: "Documents" },
    { id: 5, text: "Settings" }
  ];

  return (
    <div className='navbar_container'>
      <div className='T-tracker_logo'>
        <h1>T.Tracker</h1>
      </div>
      <ul className='navbar_links_container'>
        {navLinks.map((link) => (
          <li onClick={() => setIsActive(link.id)} className={isActive === link.id ? "active" : " "}>
         {link.id ===1 ? <FaGripHorizontal className='nav-icons' />: " "}
         {link.id ===2 ? <FaChartPie className='nav-icons' />: " "}
         {link.id ===3 ? <FaUsers className='nav-icons' />: " "}
         {link.id ===4 ? < FaFile className='nav-icons'  />: " "}
         {link.id ===5 ? <FaTools className='nav-icons' />: " "}
         <p>{link.text}</p> 
        </li>))}
      </ul>
      <div className='Workspace_container'>
        <p className='Workspace_outline-text'>Workspace</p>
        <div className='Workspace_container_display'>
       <p>Digital Agency</p> <FaAngleDown  className='nav-icons'/>
       </div>
      </div>
    </div>
  )
}

export default Navbar
