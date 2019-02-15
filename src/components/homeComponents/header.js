import React, {Component} from 'react';
import Search from './search';
import './header.css';

const Header = (props) =>{
    const { 
        dropdownList,
        filterDropdown,
        searchPkmn,
        clickPkmn,
        reset,
    } = props;

    return (
    <header className='header'>
        <div className='head-wrap'>
            <div>
                <img className='pokeball' onClick={e =>reset(e)} src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball' title='Reset to Home Page'/>
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
                <img className='pokeball' onClick={e =>reset(e)} src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='pokeball' title='Reset to Home Page'/>
            </div>
        </div>
    </header>
    );
}


export default Header;