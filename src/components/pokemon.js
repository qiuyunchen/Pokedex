import React from 'react';

const Pokemon = (props) => {
    return (
        <div>
            <img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${props.name}.png`} alt={'idk'}/><span>{props.name} {props.index + 1}</span>
        </div>
    )
}



export default Pokemon;