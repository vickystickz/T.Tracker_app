import './App.css';
import {Navbar, Tasks, Profile, Addtask} from './components';

function App() {
  return (
    <div className='tasktracker_main_container'>
      <Navbar />
      <Tasks />
      <div className='tasktracker_last_section'>
        <Profile />
        <Addtask />
      </div>
    </div>
  );
}
export default App;
