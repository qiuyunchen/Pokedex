import React from 'react';
import './load.css';

const Load = (props)=> {
    return (
        <button type="button" onClick={props.load} className="btn btn-block btn-danger load-btn">Load More Pokémon</button>
    )
}

export default Load;