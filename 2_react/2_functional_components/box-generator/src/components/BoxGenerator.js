import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [boxColor, setBoxColor] = useState("");

    const addBox = (e) => {
        e.preventDefault(); //If not entered, will clear the entries (default is blank) -- Keeps form from submitting and reloading the page
        props.setBox([...props.box, boxColor]); //... means what is already there, add more boxes (does not erase)
        setBoxColor(""); //reset the value of the box color input to empty - Ninja Bonus: clear out the color input on successful submission.
    }

    return(
        <div>
            <form onSubmit={ (e) => addBox(e) }>
                <div className="divider">
                    <input 
                        style={{
                            width: 250,
                            borderColor: "none", 
                            borderRadius: 5, 
                            textAlign: "center"
                        }} 
                        placeholder="Enter a hex code or type a color, i.e. 'red'"
                        type="text" 
                        value={ boxColor } 
                        onChange={ (e) => setBoxColor( e.target.value ) }  //change from placeholder text to value(text) that is being entered
                     />

                    <b> --- OR --- </b>
                    <label htmlFor="colorSelector"> Select a Color: </label>
 
                    <input 
                        style={{
                            borderColor: "red", 
                            borderRadius: 5
                        }} 
                        type="color" 
                        value={ boxColor } 
                        onChange={ (e) => setBoxColor( e.target.value ) }
                    />                     
                    
                    <button 
                        type="submit" 
                        style={{
                            marginLeft: 5, 
                            backgroundColor: "black", 
                            borderRadius: 10, 
                            color: "white"
                            }} 
                        onSubmit={ (e) => addBox() }>Add</button>
                </div><br></br>
            </form>
        </div>
        );
}

export default BoxGenerator;