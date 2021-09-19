import './App.css';
import { Router } from '@reach/router';
import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';

function App() {
  return (
    <div className="App">

      <Router>
        {/* //if anything is typed into url that does not match the route, will default to this route */}
        <AllPets default path="/pet" />
        <NewPet path="/pet/new" />
        <OnePet path="/pet/:id" />
        <EditPet path="/pet/edit/:id" />
      </Router>

    </div>
  );
}

export default App;
