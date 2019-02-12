import React from 'react';

const Load = (props)=> {
    return (
        <button type="button" onClick={props.load} class="btn btn-block btn-danger">Load More Pokémon</button>
    )
}

export default Load;