import React from 'react';
import Pokemon from '../components/pokemon';
import './pokemonList.css'

const List = (props) => {
    return (

        <div className='pkmn-container'>
            <div className='pkmn-list'>
                {
                    props.list.map((e, i) => {
                        return (
                            <div className="pkmn" key={i}>
                                <Pokemon name={e.name} url={e.url} index={i} click={props.click}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
};

export default List