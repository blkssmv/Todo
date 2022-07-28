import classes from "./TodoInput.module.css"


function TodoInput (){

    const onChangeTitle = (e) => {
        console.log(e.target.value)
    }

    const onChangeBody = (e) => {
        console.log(e.target.value)
    }

    return(
        <div className={classes.todoInput}>
            <div className={classes.inputGroup}>
                <input onChange={onChangeTitle} type="text" id="title" required className={classes.input}/>
                <label htmlFor="title" className={classes.inputLabel}>Title</label>
            </div>
            <div className={classes.inputGroup}>
                <input onChange={onChangeBody} type="text" id="body" required className={classes.input}/>
                <label htmlFor="body" className={classes.inputLabel}>Body</label>
            </div>

        </div>
    )
}
export default TodoInput
