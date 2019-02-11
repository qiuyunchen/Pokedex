import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Load from './components/load';
import List from './components/pokemonList';
import Search from './components/search';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: [],
      isLoaded: false,
      
    }
  }


  render() {
    return (
      <div className="container pokedex">
      
      <header><Search/></header>

      <List/>

      <footer>
        <Load/>
        <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
        </footer>

      </div>
    );
  }
}

export default App;
