import React, { useState } from 'react';

const ToDoForm = (props) =>{

    const [title, setTitle] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [isComplete, setIsComplete] = useState(false);

    const submitHandler = (e) =>{
        e.preventDefault();
        //what's already there, then add to it
        setTaskList([...taskList, {title: title}]);
        setTitle("");
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
                    <h1>Tasks to be completed:</h1>
                    {
                        taskList.map((title, index)=>(
                            <div key={index}>
                                <input 
                                    // value={isComplete} 
                                    // name="isComplete" 
                                    onChange={(e)=>setIsComplete(!isComplete)} 
                                    type="checkbox"
                                    checked={title.isComplete}
                                    style={title.isComplete ? {textDecoration: "line-through"} : null }  //not working
                                />

                                    <div style={{marginLeft: 0, display: "inline-block"}}>{title.title}
                                    </div>
                                    {
                                        isComplete === true ? 
                                            <button style={{backgroundColor: "red", borderRadius: 5}}>Delete</button> //showing up on all titles when 1 is checked.  Goes away if multiple are checked -- Why is it doing this?
                                            : null
                                    }

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
            
    );
}
export default ToDoForm;