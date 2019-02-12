import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Load from './components/load';
import List from './containers/pokemonList';
import Search from './components/search';
import Axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: [
        {name: "bulbasaur", info: "https://pokeapi.co/api/v2/pokemon/1/"}, // info holds pkmns move and abilities
        {name: "ivysaur", info: "https://pokeapi.co/api/v2/pokemon/2/"},
        {name: "venusaur", info: "https://pokeapi.co/api/v2/pokemon/3/"},
        {name: "charmander", info: "https://pokeapi.co/api/v2/pokemon/4/"},
        {name: "charmeleon", info: "https://pokeapi.co/api/v2/pokemon/5/"},
        {name: "charizard", info: "https://pokeapi.co/api/v2/pokemon/6/"},
        {name: "squirtle", info: "https://pokeapi.co/api/v2/pokemon/7/"},
        {name: "wartortle", info: "https://pokeapi.co/api/v2/pokemon/8/"},
        {name: "blastoise", info: "https://pokeapi.co/api/v2/pokemon/9/"},
        {name: "caterpie", info: "https://pokeapi.co/api/v2/pokemon/10/"},
        {name: "metapod", info: "https://pokeapi.co/api/v2/pokemon/11/"},
        {name: "butterfree", info: "https://pokeapi.co/api/v2/pokemon/12/"},
        {name: "weedle", info: "https://pokeapi.co/api/v2/pokemon/13/"},
        {name: "kakuna", info: "https://pokeapi.co/api/v2/pokemon/14/"},
        {name: "beedrill", info: "https://pokeapi.co/api/v2/pokemon/15/"},
        {name: "pidgey", info: "https://pokeapi.co/api/v2/pokemon/16/"},
        {name: "pidgeotto", info: "https://pokeapi.co/api/v2/pokemon/17/"},
        {name: "pidgeot", info: "https://pokeapi.co/api/v2/pokemon/18/"},
        {name: "rattata", info: "https://pokeapi.co/api/v2/pokemon/19/"},
        {name: "raticate", info: "https://pokeapi.co/api/v2/pokemon/20/"},
    ]
    }
  }


 
  render() {

    // Axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    // .then((data) => {
    //   console.log(data.data.results)
    //   for(let i = 0; i < data.data.results.length; i++) {
    //     console.log(data.data.results[i])
    //   }
    // })
    // .catch(err => {
    //   console.log(err)
    // })
    
    return (
      <div className="container pokedex">
      
      <header><Search/></header>

      <List list={this.state.list}/>

      <Load/>
        

      </div>
    );
  }
}

export default App;
