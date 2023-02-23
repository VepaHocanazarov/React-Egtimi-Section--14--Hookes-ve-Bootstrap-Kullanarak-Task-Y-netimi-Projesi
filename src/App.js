import './App.css';
import CreateTask from './CreateTask';
import Header from './Header';

function App() {

 const onTask = (newTask)=>{
    console.log(newTask)
  }
  return (
    <div className="App">
      <Header/>
      <CreateTask onAdd = {onTask}/>
    </div>
  );
}

export default App;
