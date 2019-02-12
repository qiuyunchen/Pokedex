import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Load from './components/load';
import List from './containers/pokemonList';
import Profile from './containers/pokemonProfile';
import Header from './components/header';
import Axios from 'axios';
import SearchList from './components/searchList';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: [
        {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}, // url holds pkmns move and abilities
        {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"},
        {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"},
        {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"},
        {name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/"},
        {name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/"},
        {name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/"},
        {name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/"},
        {name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/"},
        {name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/"},
        {name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/"},
        {name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/"},
        {name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/"},
        {name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/"},
        {name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/"},
        {name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/"},
        {name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/"},
        {name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/"},
        {name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/"},
        {name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/"},
    ],
    offset: 20,
    clickedPokemon: false,
    pokemonClicked : null,
    pokemonClickedUrl: null,
    dropdownList: [],
    }
  }
  
  filterDropdown = (e) => {
    const searchStr = e.target.value.trim().toLowerCase();
    const l = searchStr.length;
    const newList = SearchList.filter(n => n.toLowerCase().slice(0, l) === searchStr);
    this.setState({dropdownList: newList});
  }
  removeDropdown = (e) =>{
    this.setState({dropdownList: []});
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
      this.setState({offset: this.state.offset + 20, list: this.state.list.concat(arr)}, () => {
        console.log(this.state);
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  checkPokemon = (e) => {
    console.log(e.target.getAttribute('url'))
    this.setState({clickedPokemon: false, pokemonClicked: e.target.getAttribute('value'), pokemonClickedUrl: e.target.getAttribute('url')}, ()=> {
      console.log(this.state)
    })
  }
 
  render() {
    const {dropdownList} = this.state;
    return (
      <>

      <Header filterDropdown={this.filterDropdown} dropdownList={dropdownList} clickHeader={this.removeDropdown} />

        {
          this.state.clickedPokemon ?
            <Profile name={this.state.pokemonClicked} url={this.state.pokemonClickedUrl}/>
            :
            <div className="container pokedex">
              <List list={this.state.list} click={this.checkPokemon} />
              <Load load={this.loadMore} />
            </div>
       }

      </>

    );
  }
}

export default App;
