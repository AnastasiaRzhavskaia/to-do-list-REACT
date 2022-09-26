import './App.css';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <h1>Todo List</h1>
        <span>A simple React Todo List App</span>
        <hr />
      </div>
      <div className='container'>
      <ToDoList />
      <a href='https://anastasiarzhavskaia.github.io/portfolio/' target="_blank" rel="noreferrer" className='myLogo'><span>-AR-</span></a>
      </div>
    </div>
  );
}

export default App;
