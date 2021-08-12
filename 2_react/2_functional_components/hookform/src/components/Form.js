import React, { useState } from 'react';

const Form = (props) =>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const moduleStyle = {
        textAlign: "left",
        marginLeft: "460px",
        marginRight: "400px",
        paddingLeft: "15px",
        paddingBottom: "10px"
    };

    return(
        <div>
            <div className="divider">
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text"
                    value={ firstName }
                    onChange={ (e) => setFirstName( e.target.value ) }/>
            </div>

            <div className="divider">
            <label htmlFor="lastName">Last Name: </label>
            <input
                type="text"
                value={ lastName }
                onChange={ (e) => setLastName( e.target.value ) }/>
            </div>

            <div className="divider">
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                value={ email }
                onChange={ (e) => setEmail( e.target.value ) }/>
            </div>

            <div className="divider">
            <label htmlFor="password">Password: </label>
            <input
                type="text"
                value={ password }
                onChange={ (e) => setPassword( e.target.value ) }/>
            </div>

            <div className="divider">
            <label htmlFor="text">Confirm Password: </label>
            <input
                type="text"
                value={ confPassword }
                onChange={ (e) => setConfPassword( e.target.value ) }/>
            </div>

            <br></br>
            <hr></hr>
            <h3>Form Data</h3>
            <p><b><i>The data entered into the form above will show in real time below.</i></b></p>

            <div style={ moduleStyle }>
                <p>First Name: &emsp;<b><i>{ firstName }</i></b></p>
                <p>Last Name: &emsp;<b><i>{ lastName }</i></b></p>
                <p>Email: &emsp;<b><i>{ email }</i></b></p>
                <p>Password: &emsp;<b><i>{ password }</i></b></p>
                <p>Confirm Password: &emsp;<b><i>{ confPassword }</i></b></p>
            </div>
        </div>
    );
}
export default Form;