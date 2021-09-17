import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        {/* //if anything is typed into url that does not match the route, will default to this route */}
        <AllAuthors default path="/author" />
        <NewAuthor path="/author/new" />
        <EditAuthor path="/author/edit/:id" />
      </Router>

    </div>
  );
}

export default App;
