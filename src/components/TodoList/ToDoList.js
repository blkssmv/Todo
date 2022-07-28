import classes from "./ToDoList.module.css"
import TodoItem from "../TodoItem/TodoItem";

function ToDoList () {
    return(
        <div className={classes.todoList}>
            <TodoItem/>
        </div>
    )
}
export default ToDoList