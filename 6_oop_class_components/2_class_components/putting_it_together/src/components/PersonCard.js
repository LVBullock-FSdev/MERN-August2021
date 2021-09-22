import React, { Component } from 'react';

class PersonCard extends Component {

    constructor(props){
        super(props);
        const {age} = props;
        this.state = { //this.state is a variable
            currentAge: age
        };
    }

    render() {
        //destructuring
        const {firstName, lastName, hairColor} = this.props;

        const birthdayClickHandler = () => {
            this.setState({ //setState() is an asynchronous function, no equal sign needed 
                currentAge: this.state.currentAge + 1 
            });
            console.log(firstName + " " + lastName + " is a year older!")
        }

        return ( //jsx that we want to show
            <div className="module">
                <h1>{ firstName } { lastName } </h1>
                <p>Age: &nbsp;{ this.state.currentAge }</p>
                <p>Hair Color: &nbsp;{ hairColor }</p>
                <button onClick = { birthdayClickHandler } >Birthday Button for { firstName } { lastName }</button>
            </div>
        );
    }
}
export default PersonCard;



//Resource for Rainbow Button
//https://codepen.io/lemmin/pen/WObwRX