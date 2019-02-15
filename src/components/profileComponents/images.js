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
    const altImgUrl = 'https://www.saadeldeentea.com/clients/a036efe87fd307c58045b9f5e4a00d74.jpg';
    const modifiedName = name[0].toUpperCase() + name.slice(1);
    const title = `# ${padNum(data.id)} - ${modifiedName}`;
    const imgError = (e) =>{
        e.target.src = altImgUrl;
        e.target.title = 'Pokemon image not available';
    }

    return (
        <>
            <div className='name_row'>
                <span>{title}</span>
            </div>
            <div className='img_row'>
                <div className='lg_img_box'>
                    <img className='lg_img' 
                        src={imgUrl}
                        onError={e => imgError(e)}
                        alt='pkmn_img' 
                        title={modifiedName}
                    />
                    <Type name={name} data={data} />
                </div>
                <div className='mini_img_box'>
                    <div className='mini_imgs'>
                        {urlKeys.map((k, i) =>{
                            return data.sprites[k]
                            ?
                                <img className='mini_img' 
                                    src={data.sprites[k]}
                                    title={k} 
                                    alt='icon' 
                                    key={i} 
                                />
                                :
                                <img className='mini_img'
                                    src={altImgUrl}
                                    title={k+' image not available'}
                                    alt='icon'
                                />
                        })}
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
