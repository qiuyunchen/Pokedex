import React from 'react';

const padNum = (num) => {
    if (num < 10) return '00' + num;
    if (num < 100) return '0' + num;
    return num;
}

const Pokemon = (props) => {
    let num = props.index + 1;
    return (
        <div onClick={props.click} className="pkmn-row" value={props.name}>
            <div value={props.name}><img value={props.name} src={`https://img.pokemondb.net/sprites/sun-moon/icon/${props.name}.png`} alt={'idk'} /></div>
            <div value={props.name}>{props.name}</div>
            <div value={props.name}># {padNum(num)}</div>
        </div>
    )
}

export default Pokemon;