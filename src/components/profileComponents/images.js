import React from 'react';
import './images.css';
import Type from './type';

const Images = (props) => {
    const {name, data} = props;
    if (!data) return null;  

    const urlKeys = ['front_default','front_shiny','back_default','back_shiny'];
    const imgUrl = `https://img.pokemondb.net/artwork/${name}.jpg`;

    return (
        <div className='img_row'>
            <div className='lg_img'>
                <img src={imgUrl} alt='pkmn_img' />
                <Type name={name} data={data} />
            </div>
            <div className='mini_img_box'>
                <div className='mini_imgs'>
                    {urlKeys.map((k, i) => <img className='mini_img' src={data.sprites[k]} alt='icon' key={i} />)}
                </div>
                <div className='text'>
                    Default
                </div>
            </div>
        </div>
    );
}

export default Images;
