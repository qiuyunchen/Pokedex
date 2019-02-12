import React from 'react';

const padNum = (num) => {
    if (num < 10) return '00' + num;
    if (num < 100) return '0' + num;
    return num;
}

const Pokemon = (props) => {
    let num = props.index + 1;
    return (
        <div onClick={props.click} className="pkmn-row">
            <div><img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${props.name}.png`} alt={'idk'} /></div>
            <div>{props.name}</div>
            <div># {padNum(num)}</div>
        </div>
    )
}

export default Pokemon;