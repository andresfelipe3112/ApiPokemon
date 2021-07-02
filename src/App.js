
import { useState, useEffect, useRef } from 'react';
import './App.css';
import Pokemon from './components/Pokemon.jsx'

function App() {

  const [elNombreDelPokemon, setElnombredelPokemon] = useState("");
  const [imagenPokemon, setImagenPokemon] = useState("")
  const [data, setData] = useState("");
  const input = useRef("")





  function ChangueName() {
    input.preventDefault();
    setElnombredelPokemon(input.current.value);

  }


  useEffect(() => {
    async function getAPI() {
      const url = `http://pokeapi.co/api/v2/pokemon/${elNombreDelPokemon}`;
      const respuesta = await fetch(url);
      const json = await respuesta.json();
      setData(json);
    }
    getAPI()
  }, [elNombreDelPokemon])



  useEffect(() => {
    if (data.name) {
      setElnombredelPokemon(data.name);
      setImagenPokemon(data.sprites.back_default);
    } else {
      setImagenPokemon("")
    }
  }, [data])





  return (
    <div className="App">
      <label>Nombre del pokemon</label>
      <div>

        <input ref={input} type="text"  ></input>
        <button onClick={ChangueName}>Buscar</button>
      </div>


      <Pokemon name={data.name} image={imagenPokemon} />

    </div>
  );
}

export default App;
