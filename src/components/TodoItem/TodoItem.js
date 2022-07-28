import classes from "./TodoItem.module.css";
function TodoItem() {
    return(
        <div className={classes.todoItem}>
            <div>
                <div>Title</div>
                <div>Body</div>
            </div>
            <div>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default TodoItem