import React from "react";

const Home = (props) => {
    console.log(props);
    if (!props.word) { //if not the word entered in the address bar, return the home page
        return (
        <div>
            <h1>Welcome Home!</h1>
            <p>Now, let's change "home" to a word or number and hit enter.</p>

        </div>
        );
    } 
    else {
        if (isNaN(props.word)) { //if entry is not a number, the get the word?  or isNaN=true
            return (
                <div>
                    <h1 style={
                        props.textColor
                            ? { color: props.textColor, backgroundColor: props.bGroundColor }  //if colors enter in address ie. word/teal/yellow, change the color of the text teal and the background yellow
                            : null}>  {/* else no change in text color or background */}
                        <div>The word entered is: "{props.word}" {/* grab the word entered in the address bar - isNaN=true from conditional above*/}</div>
                    </h1>
                    <h3>You have entered a word.  Now, leave your word and enter 2 colors separated by /, i.e. localhost:3000/colors/red/blue.  </h3>
                    <p><strong>NOTE:</strong></p> 
                    <p>*The 1st color entered will change the font color
                        {props.textColor 
                            ?  ` to ${props.textColor}`
                            : null
                        }
                    </p>
                    <p>**The 2nd color entered will change the background
                    {props.textColor 
                            ?  ` to ${props.bGroundColor}`
                            : null
                        }
                    </p>
                </div>
            );
        } 
        else {
            return (
                <div>
                    <h1>The number entered is: {props.word}</h1> {/* grab the number entered in the address bar -- isNaN=false from line 15 (conditional)*/}
                    <p>I see you like numbers.  Now, change your number to a word and hit enter.</p>
                    <p><strong>OR</strong> follow first set of instructions on this page to return home.</p>

                </div>
            );
        }
    }
};

export default Home;
