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

        return ( //jsx that we want to show
            <div className="module">
                <h1>{ firstName } { lastName } </h1>
                <p><strong>Age:</strong> &nbsp;{ this.state.currentAge }</p>
                <p><strong>Hair Color:</strong> &nbsp;{ hairColor }</p>
            </div>
        );
    }
}
export default PersonCard;