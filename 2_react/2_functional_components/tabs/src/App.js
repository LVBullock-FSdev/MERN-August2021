import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <h1>Tabs Assignment</h1>
      <h3>August 2021 Cohort Edition, v1</h3>

      <p className="animate"><b>Race to the last Tab before WE change back?</b></p>
      <br></br>

      <Tabs 
        tabButtons={ [ //creating as an object (Passing in an array of objects)
          {label: "Tab 1", content: "Tab 1, the battle is almost won.", 
            callback(){  //this is key named callback, its value is a function -- Ninja Bonus: Allow each tab to optionally have a callback which gets fired when the relevant tab header is clicked.
              console.log(this.label, "clicked");
            } 
          },
          {label: "Tab 2", content: "Tab 2 make it do what it do!", 
            callback(){
              console.log(this.label, "clicked");
            } 
          },
          {label: "Tab 3", content: "Tab 3 --> I STILL BELIEVE!", 
            callback(){
              console.log(this.label, "clicked");
            } 
          },
          {label: "Tab 4", content: "Tab 4 has left the floor.", 
            callback(){
              console.log(this.label, "clicked");
            } 
          },
          {label: "Tab 5", content: "Tab 5 --> ALL THE WAY LIVE!!", 
            callback(){
              console.log(this.label, "clicked");
            } 
          },
          {label: "Tab 6", content: "Tab 6 --> No more tricks.", 
            callback(){
              console.log(this.label, "clicked");
            } 
          }
        ]}
      />
    </div>
  );
}

export default App;
