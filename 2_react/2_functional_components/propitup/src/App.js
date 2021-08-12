import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>PROP IT UP!</h1>
      <h3>August 2021 edition, v1</h3>

      <PersonCard 
        firstName={ "Mountain" }
        lastName={ "Dew"} 
        age={ 81 } 
        hairColor={ "Hyperactive Green" }
      />

      <PersonCard 
        firstName={ "Sierra" }
        lastName={ "Mist"} 
        age={ 22 } 
        hairColor={ "Silver Skateboard" }
      />

      <PersonCard 
        firstName={ "Doctor" }
        lastName={ "Pepper"} 
        age={ 136 } 
        hairColor={ "Bursting Brown" }
      />

      <PersonCard 
        firstName={ "Cherry" } 
        lastName={ "Pepsi"} 
        age={ 33 } 
        hairColor={ "Caffeinated Red" }
      />

    </div>
  );
}

export default App;


