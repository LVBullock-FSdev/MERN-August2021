import React, { useState } from 'react';

const ToDoForm = (props) =>{

    const [title, setTitle] = useState("");
    const [taskList, setTaskList] = useState([]);

    const submitHandler = (e) =>{
        e.preventDefault();  //do not refresh this page, would lose all state if this is skipped
        //what's already there, then add to it
        setTaskList([...taskList, {title: title, isComplete: false}]);
        setTitle("");
    }

    const isCompleteHandler = (e, taskObject) =>{
        taskObject.isComplete = !taskObject.isComplete;
        setTaskList([...taskList]); //setter is causing react to overwrite the old version that was in state with our new version of the taskObject

        //REFERENCE ONLY.  The long way to achieve this.
        // setTaskList(taskList.map((taskObj) => {
        //     if(taskObj === taskObject) { //is this the same as the task object that we need to update
                
        //         //get a copy, modify, then return the new version over into our state
        //         let updatedTask = {
        //             ...taskObj
        //         }
        //         updatedTask.isComplete = !updatedTask.isComplete
        //         return updatedTask //this new object is used to replace the original object in state
        //     } 
        //     else {
        //         return taskObj //return the original task object, untouched
        //     }
        // }))
    }

    return(
        <div>
            <div className="divider">
                <h3>Add a Task</h3>
                <form onSubmit={submitHandler} style={{
                    width: "25%", 
                    textAlign: "left", 
                }}>

                <p> {/*Remember to use htmlFor with JSX */}
                <label htmlFor="title">Title: </label>
                <input value={title} name="title" onChange={(e) =>{
                    console.log(e);
                    console.log(e.target);
                    console.log(e.target.value);
                    setTitle(e.target.value)}}
                    type="text" 
                    placeholder="Enter your task here"
                    />
                </p>

                <input type="submit" value="Add Task" style={{margin: "auto"}}/>
                </form>

                <hr></hr>

                <div>
                    <h3>Tasks to be completed:</h3>
                    {
                        taskList.map((task, index)=>(
                            <div key={index}>
                                <input 
                                    onChange={(e)=>isCompleteHandler(e, task)} 
                                    type="checkbox"
                                    checked={task.isComplete} //object (title)
                                />
                                    {
                                        task.isComplete === true ? 
                                        <span style={{ textDecorationLine: task.isComplete && 'line-through'}}>{task.title}

                                        {/*Allow the user to remove a task by clicking the delete button. (****if you want only checked/completed tasked to be deleted, place the button here***** */}
                                        <button style={{backgroundColor: "red", color: "white", borderRadius: 5, display: 'inline-block'}}>Delete</button> 

                                        </span> 

                                        : <span>{task.title}</span>
                                    }
                                    {/* Allow the user to remove a task by clicking the delete button. ****Place button here if you want to allow user to delete any task***** */}
                                     {/* <button style={{backgroundColor: "red", color: "white", borderRadius: 5, display: 'inline-block'}}>Delete</button>  */}

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
            
    );
}
export default ToDoForm;