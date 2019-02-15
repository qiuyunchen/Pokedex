import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Load from './components/homeComponents/load';
import List from './containers/pokemonList';
import Profile from './containers/pokemonProfile';
import Header from './components/homeComponents/header';
import Axios from 'axios';
import SearchList from './components/homeComponents/searchList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: [],
      offset: 0,
      clickedPokemon: false,
      pokemonClicked: null,
      pokemonClickedUrl: null,
      dropdownList: [],
    }
  }

  loadMore = (num = 20) => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${this.state.offset}&limit=${num}`)
      .then((data) => {
        let arr = []
        for (let i = 0; i < data.data.results.length; i++) {
          arr.push(data.data.results[i]);
        }
        return arr;
      })
      .then((arr) => {
        localStorage.setItem('list', JSON.stringify(this.state.list.concat(arr)));
        localStorage.setItem('offset', this.state.offset + 20);
        this.setState({ offset: this.state.offset + 20, list: this.state.list.concat(arr) }, () => {
          console.log(this.state);
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  checkPokemon = (e) => {
    this.setState({ clickedPokemon: true, pokemonClicked: e.target.getAttribute('value'), pokemonClickedUrl: e.target.getAttribute('url') }, () => {
      localStorage.setItem('pokemon', this.state.pokemonClicked);
      localStorage.setItem('pokemonClickedUrl', this.state.pokemonClickedUrl);
      localStorage.setItem('clickedPokemon', true);
    })
  }

  backHome = () => {
    localStorage.setItem('pokemon', null);
    localStorage.setItem('pokemonClickedUrl', null);
    localStorage.setItem('clickedPokemon', false);
    this.setState({ clickedPokemon: false }, () => {
      console.log(this.state);
    })
  }

  componentDidMount() {
    if (!localStorage.getItem('list')) this.loadMore();
    else this.setState({ offset: parseInt(localStorage.getItem('offset')), list: JSON.parse(localStorage.getItem('list')) })
  }
 
// Header methods ----------------------->
  filterDropdown = (e) => {
    const searchStr = e.target.value.trim().toLowerCase();
    let newList = [];
    SearchList.forEach( (n, i) => {
      if(n.toLowerCase().includes(searchStr)){
        newList.push({name: n, i});
      }
    });
    this.setState({dropdownList: newList});
  }

  removeDropdown = () =>{
    this.setState({dropdownList: []});
  }

  searchPkmn = (e) =>{
    const searchStr = e.target.value;
    document.querySelector('.search_bar').value = null;

    let index = null;
    let url = null;
    for(let i = 0; i < SearchList.length; i++){
      if (SearchList[i].toLowerCase() === searchStr.toLowerCase()){
        index = i;
        i = SearchList.length;
      }
    }

    if (index === null) {
      alert('Pokemon not found! Please check your spelling.');
      document.querySelector('.search_bar').value = null;
    } else {
      url = `https://pokeapi.co/api/v2/pokemon/${index + 1}/`;
      this.setState({
        clickedPokemon: true,
        pokemonClicked: searchStr.toLowerCase(), 
        pokemonClickedUrl: url
      }, ()=>{
        console.log('on enter, the state becomes...', this.state);
      });
    }
  }

  clickPkmn = (e) =>{
    let name = e.target.innerText;
    document.querySelector('.search_bar').value = name;
      
    const index = parseInt(e.target.id);
    const url = `https://pokeapi.co/api/v2/pokemon/${index + 1}/`;

    name = name.toLowerCase();
    this.setState({
      clickedPokemon: true, 
      pokemonClicked: name, 
      pokemonClickedUrl: url
    }, ()=>{
      console.log('on click of suggestion', this.state)
    });
  }
  resetToHome = (e) =>{
    this.setState({
      list: [],
      offset: 0,
      clickedPokemon: false,
      pokemonClicked: null,
      pokemonClickedUrl: null,
      dropdownList: [],
    }, ()=> this.loadMore(5));
  }
// <------------------------ Header Methods

  render() {
    return (
      <div onClick={e => this.removeDropdown()}>
        <Header
          dropdownList={this.state.dropdownList}
          filterDropdown={this.filterDropdown}
          searchPkmn={this.searchPkmn}
          clickPkmn={this.clickPkmn}
          reset={this.resetToHome}
        />
        {
          !JSON.parse(localStorage.getItem('clickedPokemon'))
            ?
            !this.state.clickedPokemon
              ?
              <div className="container pokedex">
                <List list={this.state.list} click={this.checkPokemon} />
                <Load load={this.loadMore} />
              </div>
              :
              <Profile name={this.state.pokemonClicked} url={this.state.pokemonClickedUrl} home={this.backHome} />
            :
            <Profile name={localStorage.getItem('pokemon')} url={localStorage.getItem('pokemonClickedUrl')} home={this.backHome} />
        }
      </div>
    );
  }
}

export default App;

