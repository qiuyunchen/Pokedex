import React from 'react';
import './homeButton.css'

const Home = (props) => {
    const {name, home} = props;

    return (
        <div>
            <span className='home' onClick={home}>Home  >>  </span>
            <span className='pkmn-name'>{name}</span>
        </div>
    )
}

export default Home;