import React from 'react';

const PersonCard = (props) => {
    const moduleStyle = {
        textAlign: "left",
        marginLeft: "400px",
        marginRight: "400px",
        marginBottom: "5px",
        backgroundColor: "lavender",
        border: "solid purple 2px",
        borderRadius: "5px",
        paddingLeft: "15px",
        paddingBottom: "2px"
    };

    return(
        <div>
            <div style={ moduleStyle }>
                <h1>{ props.firstName } { props.lastName }</h1>
                <p>Age: { props.age }</p>
                <p>Hair Color: { props.hairColor }</p>
            </div>
        </div>
    );
}
export default PersonCard;