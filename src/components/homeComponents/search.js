
import React from 'react';
import './search.css';


const Search = (props) => {
    const ifDropDown = (props.dropdownList.length > 0);
    const classList = (ifDropDown) ? 'dropdown_box' : 'dropdown_box hidden';
    const dropdownProp = (ifDropDown) ? 'search_bar override_prop' : 'search_bar';

    return (
        <div>
            <input className={dropdownProp} onChange={e => props.filterDropdown(e)} type='text' placeholder='Search...' />
            <div id='dropdown' className={classList}>
                {props.dropdownList.map( (name, i) => {
                    return <span className='matching_pkmn' onClick={e =>props.clickPkmn(e)} key={i}> {name} </span>
                })}
            </div>
        </div>
    );
    
};

export default Search;