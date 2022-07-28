import classes from "../TodoInput/TodoInput.module.css";

function Button(){
    return(
        <div className={classes.button}>
            <button>
                Add
            </button>
        </div>
    )
}
export default Button