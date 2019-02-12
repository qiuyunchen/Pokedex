import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Load from './components/load';
import List from './containers/pokemonList';
import Search from './components/search';
import Profile from './containers/pokemonProfile';

import './App.css';

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
    ],
    offset: 20,
    clickedPokemon: true,
    pokemonClicked : null
    }
  }

  loadMore = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${this.state.offset}&limit=20`)
    .then((data) => {
      let arr = []
      for(let i = 0; i < data.data.results.length; i++) {
        arr.push(data.data.results[i]);
      }
      return arr;
    })
    .then((arr) => { 
      this.setState({offset: this.state.offset + 20, list: this.state.list.concat(arr)})
      console.log(this.state.list);
    })
    .catch(err => {
      console.log(err)
    })
  }

  checkPokemon = (e) => {
    // invoked when clicked on pokemon
    //changes state from false to true for clickedPokemon
    // takes pokemon name from target, stores it in state.pokemonClicked
    // setState({clickedPokemon: true, pokemonClicked: e.target.name})
  }
 
  render() {
    
    return (
      <>
        <header className='header'>
          <div>
            <img className='pokeball' src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball'/>
          </div>
          <div>
            <h1>Pursuit Pokedex</h1>
            <Search />
          </div>
          <div>
            <img className='pokeball' src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball'/>
          </div>
        </header>

        {
          this.state.clickedPokemon ? 
          <Profile name={this.state.pokemonClicked}/> 
          : 
          <div className="container pokedex">
          <List list={this.state.list}/>
          <Load load={this.loadMore}/>
          </div>
        }
          </>
    );
  }
}

export default App;
