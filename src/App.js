import './App.css';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';

function App() {
  
  return (
    <div>
      <ListTasks/>
      <br/>
      <AddTask/>
    </div>
  );
}

export default App;