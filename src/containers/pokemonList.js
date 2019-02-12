import React from 'react';
import Pokemon from '../components/pokemon';
import './pokemonList.css'

const List = (props) => {
    return (
        <div className='pknm-container'>
        <h2>POKEMON CONTAINER</h2>
        <div className='pkmn-list'>
            {
                props.list.map((e, i) => {
                    // console.log(i)
                    return (
                        <div className="pkmn" key={i} style={{color:'blue', padding:'10px'}}>
                        <Pokemon name={e.name} index={i} click={props.click}/>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
};

export default List