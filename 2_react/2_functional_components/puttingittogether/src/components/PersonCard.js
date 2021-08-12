import React, { useState } from 'react';

const PersonCard = (props) => {
    const moduleStyle = {
        textAlign: "left",
        marginLeft: "400px",
        marginRight: "400px",
        marginBottom: "5px",
        backgroundColor: "lavender",
        border: "solid purple 2px",
        borderRadius: "5px",
        paddingLeft: "150px",
        paddingBottom: "2px"
    };

    const {firstName, lastName, age, hairColor} = props;

    const [currentAge, setCurrentAge] = useState(age)

    const addYear = () =>{
        setCurrentAge(currentAge + 1);
    }

    return(
        <div>
            <div style={ moduleStyle }>
                <h1>{ firstName } { lastName } </h1>
                <p>Age: { currentAge }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={addYear}>BIRTHDAY BUTTON</button>
            </div>
        </div>
    );
}
export default PersonCard;