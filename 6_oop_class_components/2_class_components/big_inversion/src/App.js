import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>Big Inversion</h1>
      <h3>August 2021 Cohort</h3>

      <PersonCard 
        firstName={ "Mountain" }
        lastName={ "Dew"} 
        age={ 81 } //REMINDER:  This should NOT be a string.
        hairColor={ "Hyperactive Green" }
      />

      <PersonCard 
        firstName={ "Sierra" }
        lastName={ "Mist"} 
        age={ 22 } //REMINDER:  This should NOT be a string.
        hairColor={ "Soulful Silver" }
      />

      <PersonCard 
        firstName={ "Doctor" }
        lastName={ "Pepper"} 
        age={ 136 } //REMINDER:  This should NOT be a string.
        hairColor={ "Bursting Brown" }
      />

      <PersonCard 
        firstName={ "Cherry" } 
        lastName={ "Pepsi"} 
        age={ 33 } //REMINDER:  This should NOT be a string.
        hairColor={ "Rambunctious Red" }
      />

    </div>
  );
}

export default App;

