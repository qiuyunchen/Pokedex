import React, {Component} from 'react';
import Search from './search';
import './header.css';

const Header = (props) =>{
    const { 
        dropdownList,
        filterDropdown,
        searchPkmn,
        clickPkmn,
    } = props;

    return (
    <header className='header'>
        <div>
            <img className='pokeball' src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball' />
        </div>
        <div>
            <h1>Pursuit Pokedex</h1>
            <Search 
                filterDropdown={filterDropdown} 
                dropdownList={dropdownList} 
                searchPkmn={searchPkmn}
                clickPkmn={clickPkmn}
            />
        </div>
        <div>
            <img className='pokeball' src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball' />
        </div>
    </header>
    );
}


export default Header;