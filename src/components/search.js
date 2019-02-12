
import React from 'react';
import './search.css';


const Search = (props) => {

    return (
        <div>
            <input className='search_bar' onChange={e => props.filterDropdown(e)} type='text' placeholder='Search...'></input>
            <div id='dropdown' className={props.dropdownList.length > 0 ? 'dropdown_box' : 'dropdown_box hidden'}>
                {props.dropdownList.map( (n,i) =>{
                    return <span className='matching_pkmn' key={i}> {n} </span>
                })};
            </div>
        </div>
    );
    
};

export default Search;