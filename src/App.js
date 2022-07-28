import './App.css';
import ToDoList from "./components/TodoList/ToDoList";
import TodoInput from "./components/TodoInput/TodoInput";

function App() {
  return(
      <div>
          <TodoInput/>
          <ToDoList/>
      </div>
  )
}
export default App;
