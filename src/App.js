import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Load from './components/load';
import List from './components/pokemonList';
import Search from './components/search';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: [],
      
    }
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

        <div className="container pokedex">
          
          <List/>

          <Load/>

        </div>
      </>
    );
  }
}

export default App;
