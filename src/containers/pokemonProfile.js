import React from 'react';
import Home from '../components/profileComponents/homeButton';
import Images from '../components/profileComponents/images';
import Type from '../components/profileComponents/type';
import Stats from '../components/profileComponents/stats';
import Moves from '../components/profileComponents/moves';
import Axios from 'axios';

const Profile = (props) => {


    return (
        <>
        <Home name={props.name}/>
        <Images name={props.name}/>
        <Type name={props.name}/>
        <Stats name={props.name}/>
        <Moves name={props.name}/>
        </>
    )
}

export default Profile;