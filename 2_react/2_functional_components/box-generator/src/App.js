import React, { useState } from 'react';
import './App.css';
import BoxGenerator from './components/BoxGenerator';

function App() {
  const [box, setBox] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <h3>August 2021 Cohort Edition, v1</h3>
      <p>Hit the "Add" button after entering color or making color selection below.</p>
      <p> <a href="https://www.w3schools.com/colors/colors_picker.asp" target="blank">Get HTML Hex Color Codes here</a></p>

      <BoxGenerator box={ box } setBox={ setBox }/>

      <div>
        {box.map((color, index) =>{
          return (
            <div
              key={ index }
                style={{
                  display: "inline-block",
                  backgroundColor: color,
                  width: 200,
                  height: 200,
                  marginRight: 15,
                  marginBottom: 15
                }}>
            </div>);
          })
        }
      </div>
    </div>
  );
}

export default App;
