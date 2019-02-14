import React from 'react';
import './pokemon.css';

const padNum = (num) => {
    if (num < 10) return '00' + num;
    if (num < 100) return '0' + num;
    return num;
}

const Pokemon = (props) => {
    let num = props.index + 1;
    let name1 = props.name;
    name1 = props.name.charAt(0).toUpperCase() + props.name.slice(1);

    return (
        <div className="pkmn-row" onClick={props.click} value={props.name} url={props.url}>
            <div value={props.name} url={props.url}>
                <img className="mini-pkmn-img" value={props.name} url={props.url} src={`https://img.pokemondb.net/sprites/sun-moon/icon/${props.name}.png`} alt={'idk'} />
                {name1}
            </div>
            <div value={props.name} url={props.url}> # {padNum(num)} </div>
        </div>
    )
}

export default Pokemon;



