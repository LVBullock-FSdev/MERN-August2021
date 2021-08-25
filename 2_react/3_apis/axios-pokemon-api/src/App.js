import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ pokemon, setPokemon ] = useState([]);

  //get all of the Pokemon
    useEffect(() =>{

  //Replaced Fetch with the use of Axios
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1118&offset=0")
      .then((response) => {
        console.log(response);
        setPokemon(response.data.results); //"navigates to" response.data.results and grabs the data
      })
      .catch((error) => {
        console.log(error);
      });
    
    console.log("Waiting for the Pokemon API to return data!");
    }, []); //run once and stop

  return (
    <div className="App">
      <h1>Axios Pokemon API</h1>
      <h3>August 2021 Cohort edition, v1</h3>
      <hr></hr>
      {
        pokemon.map((pokemon, index) => (
          <div className="List" key={ index }>
            <ul>
              <li>
              <p>&#9883; { pokemon.name }</p>
              </li>
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default App;
