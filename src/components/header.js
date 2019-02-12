import React, {Component} from 'react';
import Search from './search';
import './header.css';

const Header = () =>{
    return (
    <header className='header'>
        <div>
            <img className='pokeball' src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball' />
        </div>
        <div>
            <h1>Pursuit Pokedex</h1>
            <Search />
        </div>
        <div>
            <img className='pokeball' src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball' />
        </div>
    </header>
    );
}


export default Header;