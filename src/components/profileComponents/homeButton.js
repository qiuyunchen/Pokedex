import React from 'react';
import './homeButton.css'

const Home = (props) => {
    const {name, home} = props;
    const newName = name[0].toUpperCase() + name.slice(1);

    return (

        <div className='nav-row'>
            <span className='home-text' onClick={home}> Home </span>
            <span className='arrow'> >> </span>
            <span className='pkmn-name'>{newName}</span>

        </div>
    )
}

export default Home;