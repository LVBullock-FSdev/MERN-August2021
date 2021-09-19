import React from "react";

const Form = (props) =>{

    // submit handler will either = editPetHandler ORRR newSubmitHandler
    // based upon which value it was given when it was passed as a prop. 
    const {submitHandler, buttonText, pet, setPet, errors} = props;
    
    // keeps us from needing to repeat
    const newChangeHandler = (e) => {
        let newStateObject = {...pet};
        newStateObject[e.target.name] = e.target.value;
        console.log(e.target);
        setPet(newStateObject);
        }


    return(
        //will equal editPetHandler ORRR newSubmitHandler
        //depending on which component is rendering and sending it down

    <form onSubmit={submitHandler}>
    <div>
        <div className="formLeft">
            <div className="blankLine">
                <label htmlFor="name"><strong>Pet Name:</strong></label><br/>
                <input onChange={newChangeHandler} name="name" type="text" value={pet.name} />
                {
                    errors.name ?
                    //change to className error-text
                    <span style={{backgroundColor: "yellow", color: "red"}}>{errors.name.message}
                    </span>
                    : null
                }
            </div>

            <div className="blankLine">
                <label htmlFor="type"><strong>Pet Type:</strong></label><br/>
                <input onChange={newChangeHandler} name="type" type="text" value={pet.type} />
                {
                    errors.type ?
                    //change to className error-text
                    <span style={{backgroundColor: "yellow", color: "red"}}>{errors.type.message}
                    </span>
                    : null
                }
            </div>

            <div>
                <label htmlFor="description"><strong>Pet Description:</strong></label><br/>
                <input onChange={newChangeHandler} name="description" type="text" value={pet.description} />
                {
                    errors.description ?
                    //change to className error-text
                    <span style={{backgroundColor: "yellow", color: "red"}}>{errors.description.message}
                    </span>
                    : null
                }
            </div>
        </div>

        <div className="formRight" style={{marginLeft: "100px"}}>
            <div className="blankLine">
                <h3>Skills (Optional):</h3>
                <label htmlFor="skill1"><strong>Skill 1:</strong></label><br/>
                <input onChange={newChangeHandler} name="skill1" type="text" value={pet.skill1} />
                {
                    errors.skill1 ?
                    //change to className error-text
                    <span style={{backgroundColor: "yellow", color: "red"}}>{errors.skill1.message}
                    </span>
                    : null
                }
            </div>

            <div className="blankLine">
                <label htmlFor="skill2"><strong>Skill 2:</strong></label><br/>
                <input onChange={newChangeHandler} name="skill2" type="text" value={pet.skill2} />
                {
                    errors.skill2 ?
                    //change to className error-text
                    <span style={{backgroundColor: "yellow", color: "red"}}>{errors.skill2.message}
                    </span>
                    : null
                }
            </div>

            <div className="blankLine">
                <label htmlFor="skill3"><strong>Skill 3:</strong></label><br/>
                <input onChange={newChangeHandler} name="skill3" type="text" value={pet.skill3} />
                {
                    errors.skill3 ?
                    //change to className error-text
                    <span style={{backgroundColor: "yellow", color: "red"}}>{errors.skill3.message}
                    </span>
                    : null
                }
            </div>
        </div>
    </div>
    <button className="blueBtn">{buttonText}</button>

    </form>



    )

}

export default Form;