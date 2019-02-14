import React from 'react';
import './images.css';
import Type from './type';

const padNum = (num) => {
    if (num < 10) return '00' + num;
    if (num < 100) return '0' + num;
    return num;
}

const Images = (props) => {
    const {name, data} = props;
    if (!data) return null;  

    const urlKeys = ['front_default','front_shiny','back_default','back_shiny'];
    const imgUrl = `https://img.pokemondb.net/artwork/${name}.jpg`;
    const modifiedName = name[0].toUpperCase() + name.slice(1);
    const title = `# ${padNum(data.id)} - ${modifiedName}`;
    
    return (
        <>
            <div className='name_row'>
                <span>{title}</span>
            </div>
            <div className='img_row'>
                <div className='lg_img_box'>
                    <img className='lg_img' src={imgUrl} alt='pkmn_img' />
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
        </>
    );
}

export default Images;
