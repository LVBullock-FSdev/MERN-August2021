import React, { useState } from 'react';

const Tabs = (props) => {
    console.log(props);
    const [selectedTab, setSelectedTab] = useState(0);  //0 is default value for selectedTab which is the Tab 1
    return (
        <div id="container">

            <div id="header">
                    {props.tabButtons.map((tab, index) =>{ //map displays the array

                        const tabButtonStyles = { //Ninja Bonus: Add some CSS animations to the tab switching to smooth out the user experience.
                            padding: "20px", 
                            marginRight: "10px", 
                            border: "1px solid black",
                            fontWeight: "bold",
                            backgroundColor: "lavender",
                            borderRadius: "60px"
                        }

                        if (selectedTab === index) { //Ninja Bonus: Add some CSS animations to the tab switching to smooth out the user experience.
                            tabButtonStyles.backgroundColor = "black";
                            tabButtonStyles.color = "white";
                        }

                        return (
                            <span 
                            key={index} //keep track of which tab is selected using index
                                onClick={(e) =>{
                                    alert(tab.label + " Clicked");  //?? Sensei Bonus: Add a JavaScript animation to the tab switching action.
                                    setSelectedTab(index);
                                    props.tabButtons[index].callback();
                                }}
                                style={tabButtonStyles}>
                                    {tab.label}
                            </span>
                        );
                    })}
            </div>

            <div id="main">
                 <h3 className="animate">{ props.tabButtons[selectedTab].content }</h3> {/*use props to access the content of the selected tab index -- This is not the Sensei Bonus :(*/}
            </div>

        </div>
    );
};

export default Tabs;