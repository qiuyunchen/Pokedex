import React from 'react';
import Pokemon from '../components/pokemon';

const List = (props) => {
    return (
        <div className='pknm-container'>
        <h2>POKEMON CONTAINER</h2>
        <div className='pkmn-list'>
            {
                props.list.map((e, i) =>{
                    console.log(e.img)
                    return (
                        <Pokemon name={e.name} key={i}/>
                    )
                })
            }

        </div>
        </div>
    )
};

export default List