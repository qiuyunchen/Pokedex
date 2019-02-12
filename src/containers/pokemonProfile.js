import React from 'react';
import Home from '../components/profileComponents/homeButton';
import Images from '../components/profileComponents/images';
import Type from '../components/profileComponents/type';
import Stats from '../components/profileComponents/stats';
import Moves from '../components/profileComponents/moves';

const Profile = (props) => {
    return (
        <>
        <Home/>
        <Images/>
        <Type/>
        <Stats/>
        <Moves/>
        </>
    )
}

export default Profile;