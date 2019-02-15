
import React from 'react';
import './search.css';

const Search = (props) => {
    const {
        filterDropdown,
        dropdownList,
        searchPkmn,
        clickPkmn,
    } = props;

    const ifDropDown = (dropdownList.length > 0);
    const classList = (ifDropDown) ? 'dropdown_box' : 'dropdown_box hidden';
    const dropdownProp = (ifDropDown) ? 'search_bar override_prop' : 'search_bar';

    return (
        <div>
            <input type='text' className={dropdownProp}
                    placeholder='Search...'
                    onChange={e => filterDropdown(e)}
                    onClick={e =>e.target.value = null}
                    onKeyDown={e => {if (e.key === 'Enter') searchPkmn(e)} } 
            />
            <div id='dropdown' className={classList}>
                {props.dropdownList.map( (obj, i) => {
                    return <span className='matching_pkmn' onClick={e =>clickPkmn(e)} id={obj.i} key={i}> {obj.name} </span>
                })}
            </div>
        </div>
    );
    
};

export default Search;