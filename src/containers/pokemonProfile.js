import React from 'react';
import Home from '../components/profileComponents/homeButton';
import Images from '../components/profileComponents/images';
import Type from '../components/profileComponents/type';
import Stats from '../components/profileComponents/stats';
import Moves from '../components/profileComponents/moves';

const Profile = (props) => {


    return (
        <>
        <Home name={props.name} url={props.url}/>
        <Images name={props.name} url={props.url}/>
        <Type name={props.name} url={props.url}/>
        <Stats name={props.name} url={props.url}/>
        <Moves name={props.name} url={props.url}/>
        </>
    )
}

export default Profile;