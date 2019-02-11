import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Load from './components/load';
import List from './components/pokemonList';
import Search from './components/search';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  render() {
    return (
      <div className="container pokedex">
      
      <header><Search/></header>

      <List/>

      <Load/>

      </div>
    );
  }
}

export default App;
