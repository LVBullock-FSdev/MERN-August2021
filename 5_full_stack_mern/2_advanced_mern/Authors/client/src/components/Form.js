import React from "react";
import { Link } from "@reach/router";

const Form = (props) =>{

    // submit handler will either = editAuthorHandler ORRR newSubmitHandler
    // based upon which value it was given when it was passed as a prop. 
    const {submitHandler, buttonText, author, setAuthor, errors} = props;
    
    // keeps us from needing to repeat
    const newChangeHandler = (e) => {
        let newStateObject = {...author};
        //referencing a field or a key inside of the object with "name" which is inside of the tag
        //REMEMBER:  different input types (text, checkbox, radio, etc) require use of different attributes
        // (e.g. "checked, value, valueAsNumber, etc").
        //If we tried to use e.target.value for the checkbox, it would not return our boolean.
        //TEST THIS and mess around with console logs of e, e.target and e.target.value.
        //Search through these logs and use the right attribute for the right situation!
        if(e.target.type === "checkbox"){
            console.log(e.target.name, e.target.checked);
            newStateObject[e.target.name] = e.target.checked;
        }
        else{
            console.log(e.target.name, e.target.value);
            newStateObject[e.target.name] = e.target.value;
        }
        console.log(e.target);
        setAuthor(newStateObject);
    }
    return(
        //will equal editAuthorHandler ORRR newSubmitHandler
        //depending on which component is rendering and sending it down

    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="name"><strong>Name:</strong></label>
            <input onChange={newChangeHandler} name="name" type="text" value={author.name} />
            {
                errors.name ?
                //change to className error-text
                <span style={{backgroundColor: "yellow", color: "red"}}>{errors.name.message}
                </span>
                : null
            }
        </div>

        <button>{buttonText}</button>
        <Link to="/authors"><button>Cancel</button></Link>
    </form>
    )
}

export default Form;