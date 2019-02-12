
import React from 'react';
import './search.css';
import SearchList from './searchList';
let dropDownList = [];

const filterDropdown = (e) => {
    const searchStr = e.target.value.trim().toLowerCase();
    const l = searchStr.length;
    dropDownList = SearchList.filter(n => n.toLowerCase().slice(0,l) === searchStr);
    
    console.log('dropdown list...', dropDownList)
    console.log('class list...', document.querySelector('#dropdown').classList);
    //document.querySelector('#dropdown').classList.remove('hidden');
}

const Search = () => {
    const hiddenClassList = 'dropdown_box hidden';

    return (
        <div>
            <input className='search_bar' onChange={e => filterDropdown(e)} type='text' placeholder='Search...'></input>
            {/*  */}
            <div id='dropdown' className={dropDownList.length > 0 ? 'dropdown_box' : hiddenClassList}>

            </div>
            {/*  */}
        </div>
    );
    
};

export default Search;