import './App.css';
import React, {useState, useEffect } from 'react';

function App() {

  const [ pokemon, setPokemon ] = useState([]);

  //get all of the Pokemon
    useEffect(() => {

      fetch("https://pokeapi.co/api/v2/pokemon/?limit=1118&offset=0") //1117 pokemon on the site
        .then((response) => {
          console.log(response);
          response.json()
            .then((jsonResponse) => {
              console.log(response);
              setPokemon(jsonResponse.results);
            })
            .catch((jsonError) =>{
              console.log(jsonError);
            });
        })
        .catch((error) => {
          console.log(error);
        });

    console.log("Waiting for the Pokemon API to return data!");
    }, []);

  return (
    <div className="App">
      <h1>Pokemon API</h1>
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
